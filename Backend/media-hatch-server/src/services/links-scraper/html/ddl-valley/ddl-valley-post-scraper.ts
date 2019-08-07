import { LinksPackage, Media, Movie, TvShowEpisode } from 'media-hatch-core';
import moment from 'moment';
import * as xregexp from 'xregexp';

import { HtmlScrapedMediaInfo } from '../html-scraped-media-info';
import { DdlValleyLinksScraper } from './ddl-valley-links-scraper';
import { TvShowPreviewData } from './tv-show-preview-data';

export class DdlValleyPostScraper {
  private tvShowsRegex = xregexp.build('(?<title>{{0}})\\S*s(?<season>{{1}})(?<episodes>{{2}})?', ['\\S*', '[0-9]+', 'e[0-9e\\s]+'], 'i');

  private movieTitleYearRegex = xregexp.build('(?<title>{{0}})S*\\.(?<year>{{1}})\\.', ['.*', '[0-9]{4}'], 'i');

  private readonly notFoundTitle = 'Error 404 - Not Found';

  public scrapeRawTitle(htmlPost: Cheerio) {
    const titleNode = htmlPost.prev().children('a');
    const rawTitle = titleNode.text();
    if (rawTitle === this.notFoundTitle) {
      return undefined;
    } else {
      return rawTitle;
    }
  }

  public async scrape(rawTitle: string, htmlPost: Cheerio, linksScraper: DdlValleyLinksScraper): Promise<HtmlScrapedMediaInfo[]> {
    let media: Media = undefined;
    const momentDate = moment.utc(htmlPost.find('.date').text(), 'MMM Do, YYYY');
    const uploadDate = momentDate.isValid() ? momentDate.toDate() : new Date(0);
    const imgUrl = htmlPost
      .find('.poster')
      .children('img')
      .attr('src');
    const titleNode = htmlPost.prev().children('a');
    const pageUrl = titleNode.attr('href');
    const description = htmlPost.find('.plot').text();
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
        movie.name = this.replaceDotsWithSpacesAndTrim(movieTitleYearMatchArray[1]);
        movie.releaseYear = +movieTitleYearMatchArray[2];
      } else {
        movie.name = rawTitle;
      }
      media = movie;
    } else {
      const tvShowTitleData = this.extractTvShowPreviewData(rawTitle);
      if (tvShowTitleData) {
        let tvShow = new TvShowEpisode();
        tvShow.name = tvShowTitleData.name;
        tvShow.seasonNb = tvShowTitleData.season;
        if (tvShowTitleData.episodes.length === 1) {
          tvShow.episodeNb.push(tvShowTitleData.episodes[0]);
          media = tvShow;
        } else {
          tvShow.description = description;
          tvShow.uploadDate = uploadDate;
          tvShow.illustrationUrl = imgUrl;
          tvShow.tags = tvShow.tags.concat(tags);
          const linksPackages = await linksScraper.scrape(new HtmlScrapedMediaInfo(tvShow, pageUrl));
          const episodeNbToTvShow = new Map<number, TvShowEpisode>();
          for (const linksPackage of linksPackages) {
            const episodeNbToPackage = new Map<number, LinksPackage>();
            for (const link of linksPackage.links) {
              const tvShowLinkData = this.extractTvShowPreviewData(link);
              if (tvShowLinkData.episodes.length > 0) {
                const episodeNb = +tvShowLinkData.episodes[0];
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
      media.uploadDate = uploadDate;
      media.description = description;
      media.illustrationUrl = imgUrl;
      media.tags = media.tags.concat(tags);
    }
    return Promise.resolve([new HtmlScrapedMediaInfo(media, pageUrl)]);
  }

  private extractTvShowPreviewData(rawText: string): TvShowPreviewData {
    const tvShowMatchArray = xregexp.exec(rawText, this.tvShowsRegex);
    let tvShowTitleData: TvShowPreviewData;
    if (tvShowMatchArray && tvShowMatchArray.length >= 3) {
      tvShowTitleData = new TvShowPreviewData(this.replaceDotsWithSpacesAndTrim(tvShowMatchArray[1]), +tvShowMatchArray[2]);
      if (tvShowMatchArray.length > 3 && tvShowMatchArray[3]) {
        tvShowTitleData.episodes = tvShowMatchArray[3]
          .toLowerCase()
          .split('e')
          .filter(s => s.length > 0)
          .map(s => +s);
      }
    }
    return tvShowTitleData;
  }

  private replaceDotsWithSpacesAndTrim(text: string) {
    return text.replace(new RegExp('\\.', 'g'), ' ').trim();
  }
}
