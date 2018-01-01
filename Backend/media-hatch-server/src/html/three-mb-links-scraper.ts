import { ThreeMbScrapedMediaInfo } from './three-mb-scraped-media-info';
import { ThreeMbMediaScraper } from './three-mb-media-scraper';

import { LinksPackage } from 'media-hatch-core';

import * as WebRequest from 'web-request';
import * as cheerio from 'cheerio';
import * as xregexp from 'xregexp';

export class ThreeMbLinksScraper {
  public scrape(scrapedMediaInfo: ThreeMbScrapedMediaInfo): Promise<LinksPackage[]> {
    return ThreeMbMediaScraper.getHtmlDocument(scrapedMediaInfo.pageUrl).then(htmlDocument => {
      const entry = htmlDocument.find('.entry');
      let linksPageNodeFound = false;
      const linksPageNode = entry.find('a').filter((i, el) => {
        return (
          cheerio
            .load(el)
            .root()
            .text()
            .toLowerCase()
            .indexOf('click here to get links') >= 0
        );
      });
      const linksPageUrl = linksPageNode.first().attr('href');
      return this.getLinksPageHtml(linksPageUrl).then(htmlDocument => {
        let unfilteredNodes = htmlDocument.find('tr');
        unfilteredNodes.first().remove();
        unfilteredNodes.last().remove();
        scrapedMediaInfo.media.linksPackages = this.retrieveLinksPackages(htmlDocument.find('tr'));
        return scrapedMediaInfo.media.linksPackages;
      });
    });
  }

  private getLinksPageHtml(linksPageUrl: string): Promise<Cheerio> {
    return WebRequest.post('http://earn-money-onlines.info/wp-login.php?action=postpass', { jar: true, form: 'post_password=300mbfilms&Submit=Submit' }).then(
      response => {
        return ThreeMbMediaScraper.getHtmlDocument(linksPageUrl, {
          jar: response.request.options.jar
        });
      }
    );
  }

  private retrieveLinksPackages(linksPackagesNodes: Cheerio): LinksPackage[] {
    let linksPackages = new Array<LinksPackage>();
    for (let i = 0; i < linksPackagesNodes.length; i++) {
      let newLinksPackage = this.retrieveLinksPackage(linksPackagesNodes.eq(i));
      if (newLinksPackage != null) {
        linksPackages.push(newLinksPackage);
      }
    }
    return linksPackages;
  }

  private retrieveLinksPackage(linksPackageNode: Cheerio): LinksPackage {
    const linksNodes = linksPackageNode.find('td');
    let links = new Array<string>();
    let fileHost: string;

    for (let j = 1; j < linksNodes.length; j++) {
      let newLink = this.retrieveLink(linksNodes.eq(j));
      if (newLink) {
        links.push(newLink);
        if (!fileHost) {
          const fileHostMatchArray = xregexp.exec(newLink, this.fileHostRegex);
          if (fileHostMatchArray) {
            fileHost = fileHostMatchArray['fileHost'];
          }
        }
      }
    }
    if (links.length > 0 && fileHost) {
      return new LinksPackage(fileHost, links);
    } else {
      return null;
    }
  }

  private retrieveLink(linkNode: Cheerio): string {
    const originalLink = linkNode.children('a').attr('href');
    if (originalLink) {
      const linkMatchArray = xregexp.exec(originalLink, this.linkRegex);
      if (linkMatchArray) {
        return linkMatchArray['link'];
      }
    }
    return undefined;
  }

  private linkRegex = xregexp.build('(http://linkshrink.net.*)*(?<link>{{0}})', ['(http)(s)?://.*'], 'i');

  private fileHostRegex = xregexp.build('(http)(s)?://(?<fileHost>{{0}})/.*', ['[^/]*'], 'i');
}
