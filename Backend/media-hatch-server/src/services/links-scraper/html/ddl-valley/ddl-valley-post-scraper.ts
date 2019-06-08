import { HtmlScrapedMediaInfo } from '../html-scraped-media-info';
import * as xregexp from 'xregexp';
import { Movie, TvShowEpisode, Media, LinksPackage } from 'media-hatch-core';
import { DdlValleyScraper } from './ddl-valley-scraper';

export class DdlValleyPostScraper {
	private tvShowsRegex = xregexp.build('(?<title>{{0}})\\S*s(?<season>{{1}})(?:e(?<episode>{{2}}))*', ['\\S*', '[0-9]+', '[0-9]+'], 'i');

	private movieTitleYearRegex = xregexp.build('(?<title>{{0}})S*\\.(?<year>{{1}})\\.', ['.*', '[0-9]{4}'], 'i');

	private tagPrefix = 'tag-';
	private savedTags = ['1080p', '720p', 'hdrip', 'dvdrip', 'brip', 'hdtv', 'web-dl', 'hdcam'];
	private titleSuffixes = [
		'720p',
		'1080p',
		'hdrip',
		'dvdrip',
		'brrip',
		'hdtv',
		'web-dl',
		'hdcam',
		'hqmic',
		'nitro',
		'dvdscr',
		'limited',
		'ppv'
	];

	private readonly notFoundTitle = 'Error 404 - Not Found';

	public async scrape(htmlPost: Cheerio): Promise<HtmlScrapedMediaInfo[]> {
		let media: Media = undefined;
		const imgUrl = htmlPost
			.find('.poster')
			.children('img')
			.attr('src');
		const titleNode = htmlPost.prev().children('a');
		const pageUrl = titleNode.attr('href');
		const rawTitle = titleNode.text();
		const description = htmlPost.find('.plot').text();
		if (rawTitle === this.notFoundTitle) {
			return undefined;
		}
		const tagsNodes = htmlPost
			.find('.genre.fl.cl')
			.children()
			.filter((i, element) => {
				return (
					element.attribs['rel'] === 'category tag' &&
					element.children.length > 0 &&
					element.children[0].data &&
					element.children[0].data.toLowerCase().indexOf('1-click') === -1
				);
			});
		const tags = new Array<string>();
		let isMovie = false;
		for (const tagNode of tagsNodes.toArray()) {
			const tag = tagNode.children[0].data;
			const lowerCaseTag = tag.toLowerCase();
			if (lowerCaseTag !== 'movies' && lowerCaseTag !== 'tv shows') {
				tags.push(tag);
			} else if (lowerCaseTag === 'movies') isMovie = true;
		}

		if (isMovie) {
			let movie = new Movie();
			const movieTitleYearMatchArray = xregexp.exec(rawTitle, this.movieTitleYearRegex);
			if (movieTitleYearMatchArray && movieTitleYearMatchArray.length == 3) {
				movie.name = movieTitleYearMatchArray[1].replace(new RegExp('\\.', 'g'), ' ').trim();
				movie.releaseYear = +movieTitleYearMatchArray[2];
			} else {
				movie.name = rawTitle;
			}
			media = movie;
		} else {
			const tvShowMatchArray = xregexp.exec(rawTitle, this.tvShowsRegex);
			if (tvShowMatchArray && tvShowMatchArray.length >= 3) {
				let tvShow = new TvShowEpisode();
				tvShow.name = tvShowMatchArray[1].replace(new RegExp('\\.', 'g'), ' ').trim();
				tvShow.seasonNb = +tvShowMatchArray[2];
				if (tvShowMatchArray.length > 3 && tvShowMatchArray[3]) {
					tvShow.episodeNb.push(+tvShowMatchArray[3]);
					media = tvShow;
				} else {
					tvShow.description = description;
					tvShow.illustrationUrl = imgUrl;
					tvShow.tags = tvShow.tags.concat(tags);
					const linksPackages = await DdlValleyScraper.linksScraper.scrape(new HtmlScrapedMediaInfo(tvShow, pageUrl));
					const episodeNbToTvShow = new Map<number, TvShowEpisode>();
					for (const linksPackage of linksPackages) {
						const episodeNbToPackage = new Map<number, LinksPackage>();
						for (const link of linksPackage.links) {
							const linkTvShowMatchArray = xregexp.exec(link, this.tvShowsRegex);
							if (linkTvShowMatchArray && linkTvShowMatchArray.length > 3 && linkTvShowMatchArray[3]) {
								const episodeNb = +linkTvShowMatchArray[3];
								if (!episodeNbToPackage.has(episodeNb)) {
									episodeNbToPackage.set(episodeNb, new LinksPackage(linksPackage.fileHost, new Array<string>()));
								}
								episodeNbToPackage.get(episodeNb).links.push(link);
							}
						}
						for (const episodeNb of episodeNbToPackage.keys()) {
							if (!episodeNbToTvShow.has(episodeNb)) {
								const tvShowClone = <TvShowEpisode>Object.assign(new TvShowEpisode(), tvShow);
								tvShowClone.episodeNb = [episodeNb];
								tvShowClone.rawName = tvShowClone.fullName;
								tvShowClone.linksPackages = new Array<LinksPackage>();
								episodeNbToTvShow.set(episodeNb, tvShowClone);
							}
							episodeNbToTvShow.get(episodeNb).linksPackages.push(episodeNbToPackage.get(episodeNb));
						}
					}
					const tvShowsInfo = new Array<HtmlScrapedMediaInfo>();
					for (const tvShow of episodeNbToTvShow.values()) {
						tvShowsInfo.push(new HtmlScrapedMediaInfo(tvShow, pageUrl));
					}
					return tvShowsInfo;
				}
			}
		}
		if (media) {
			media.rawName = rawTitle;
			media.description = description;
			media.illustrationUrl = imgUrl;
			media.tags = media.tags.concat(tags);
		}
		return Promise.resolve([new HtmlScrapedMediaInfo(media, pageUrl)]);
	}
}
