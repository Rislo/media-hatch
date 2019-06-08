import * as WebRequest from 'web-request';
import * as cheerio from 'cheerio';
import { Media, LinksPackage } from 'media-hatch-core';
import { HtmlMediaScraper } from '../html-media-scraper';
import { HtmlScrapedMediaInfo } from '../html-scraped-media-info';
import { DdlValleyPostScraper } from './ddl-valley-post-scraper';
import { DdlValleyLinksScraper } from './ddl-valley-links-scraper';

export class DdlValleyScraper extends HtmlMediaScraper {
	public static postScraper = new DdlValleyPostScraper();
	public static linksScraper = new DdlValleyLinksScraper();

	private mediaRawNameToScrapedMediaInfo: Map<string, HtmlScrapedMediaInfo> = new Map<string, HtmlScrapedMediaInfo>();

	public async scrapeInfo(searchTerm: string, fromPage: number, pages: number): Promise<Iterable<Media>> {
		this.clear();
		fromPage = fromPage == 1 ? 0 : fromPage;
		if (fromPage == 0) {
			this.mediaRawNameToScrapedMediaInfo.clear();
		}
		if (searchTerm) {
			if (this.tryManageSearchTerm(searchTerm)) {
				return this.scrapeInfoInternal(fromPage, pages);
			}
		} else {
			this.customRoute = 'category/tv-shows';
			await this.scrapeInfoInternal(fromPage, pages);
			this.customRoute = 'category/movies';
			return this.scrapeInfoInternal(fromPage, pages);
		}
	}

	public scrapeLinks(mediaRawName: string): Promise<LinksPackage[]> {
		const scrapedMediaInfo = this.mediaRawNameToScrapedMediaInfo.get(mediaRawName);
		if (scrapedMediaInfo) {
			if (!scrapedMediaInfo.media.linksPackageAvailable) {
				return DdlValleyScraper.linksScraper.scrape(scrapedMediaInfo);
			} else {
				return Promise.resolve(scrapedMediaInfo.media.linksPackages);
			}
		} else {
			return Promise.reject(new Error('Media not found'));
		}
	}

	private async scrapeInfoInternal(fromPage: number, pages: number): Promise<Iterable<Media>> {
		try {
			this.currentPage = fromPage;
			const toPage = fromPage + pages;
			if (this.currentPage < toPage) {
				let htmlDocumentPromise = HtmlMediaScraper.getHtmlDocument(this.getNextPageUrl());
				let lastLoop;
				do {
					const htmlDocument = await htmlDocumentPromise;
					lastLoop = this.currentPage == toPage;
					if (!lastLoop) htmlDocumentPromise = HtmlMediaScraper.getHtmlDocument(this.getNextPageUrl());

					const posts = htmlDocument.find('.post');
					for (let i = 0; i < posts.length; i++) {
						for (const scrapedMediaInfo of await DdlValleyScraper.postScraper.scrape(posts.eq(i))) {
							if (scrapedMediaInfo) {
								if (scrapedMediaInfo.media) {
									this.mediaRawNameToScrapedMediaInfo.set(scrapedMediaInfo.media.rawName, scrapedMediaInfo);
									this._scrapedMedia.push(scrapedMediaInfo.media);
								}
							}
						}
					}
				} while (!lastLoop);
			}
			return this._scrapedMedia;
		} catch (e) {
			return new Array<Media>();
		}
	}

	protected get baseUrl() {
		return 'http://www.ddlvalley.me';
	}

	protected getNextPageUrl(): string {
		this.currentPage++;
		if (this.currentPage == 1) {
			if (this.customRoute) {
				return `${this.baseUrl}/${this.customRoute}/`;
			} else {
				return `${this.baseUrl}/`;
			}
		} else {
			return `${this.baseUrl}/${this.customRoute}/${this.pageRoute}/${this.currentPage}`;
		}
	}

	private tryManageSearchTerm(searchTerm: string): boolean {
		if (searchTerm.startsWith(':')) {
			if (searchTerm.startsWith(':show')) {
				this.customRoute = `show/${this.formatSearchTerm(':show', searchTerm)}`;
			} else if (searchTerm.startsWith(':tag')) {
				this.customRoute = `tag/${this.formatSearchTerm(':tag', searchTerm)}`;
			} else {
				return false;
			}
		} else {
			this.customRoute = `tag/${this.formatSearchTerm(':tag', searchTerm)}`;
		}
		return true;
	}

	private formatSearchTerm(prefix: string, searchTerm: string) {
		return `${encodeURIComponent(
			searchTerm
				.replace(prefix, '')
				.trim()
				.replace(/ /g, '-')
		)}`;
	}
}
