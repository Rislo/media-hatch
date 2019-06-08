import { HtmlScrapedMediaInfo } from '../html-scraped-media-info';
import { LinksPackage } from 'media-hatch-core';
import { HtmlMediaScraper } from '../html-media-scraper';
import * as xregexp from 'xregexp';

export class DdlValleyLinksScraper {
	private fileHostRegex = xregexp.build('(http)(s)?://(?<fileHost>{{0}})/.*', ['[^/]*'], 'i');

	private fileQualityRegex = xregexp.build('\\.(?<quality>{{0}})\\.', ['(720p)|(1080p)'], 'i');

	public scrape(scrapedMediaInfo: HtmlScrapedMediaInfo): Promise<LinksPackage[]> {
		return HtmlMediaScraper.getHtmlDocument(scrapedMediaInfo.pageUrl).then(htmlDocument => {
			const linksNodes = htmlDocument
				.find('.post')
				.find('.cont')
				.find('a');
			const links = new Array<string>();
			for (let i = 0; i < linksNodes.length; i++) {
				const linkNode = linksNodes.eq(i);
				if (linkNode.attr('rel') === 'nofollow') {
					links.push(linksNodes.eq(i).attr('href'));
				}
			}
			return this.retrieveLinksPackage(links);
		});
	}

	private retrieveLinksPackage(links: string[]): LinksPackage[] {
		let fileHost: string;
		let fileQuality: string;
		const packages = new Map<string, Map<string, LinksPackage>>();
		for (const link of links) {
			const fileHostMatchArray = xregexp.exec(link, this.fileHostRegex);
			const fileQualityMatchArray = xregexp.exec(link, this.fileQualityRegex);
			if (fileHostMatchArray) {
				fileHost = fileHostMatchArray['fileHost'];
				fileQuality = fileQualityMatchArray ? fileQualityMatchArray['quality'] : '';
				if (!packages.has(fileHost)) {
					packages.set(fileHost, new Map<string, LinksPackage>());
				}
				const fileHostPackages = packages.get(fileHost);
				if (fileHostPackages.has(fileQuality)) {
					fileHostPackages.get(fileQuality).links.push(link);
				} else {
					fileHostPackages.set(fileQuality, new LinksPackage(fileHost, [link]));
				}
			}
		}
		return this.getLowestQualityPackages(packages);
	}

	private getLowestQualityPackages(packages: Map<string, Map<string, LinksPackage>>): LinksPackage[] {
		const lowestQualityPackages = new Array<LinksPackage>();
		for (const fileHost of packages.keys()) {
			const fileHostPackages = packages.get(fileHost);
			lowestQualityPackages.push(fileHostPackages.get(this.getLowestQualityKey(Array.from(fileHostPackages.keys()))));
		}
		return lowestQualityPackages;
	}

	private getLowestQualityKey(keys: string[]): string {
		var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
		return keys.sort(collator.compare)[0];
	}
}
