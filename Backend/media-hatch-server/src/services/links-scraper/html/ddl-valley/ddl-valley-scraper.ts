import { Media, Movie } from 'media-hatch-core';
import { HtmlMediaScraper } from '../html-media-scraper';
import { HtmlScrapedMediaInfo } from '../html-scraped-media-info';
import { DdlValleyPostScraper } from './ddl-valley-post-scraper';
import { DdlValleyLinksScraper } from './ddl-valley-links-scraper';
import { Injectable } from 'injection-js';

@Injectable()
export class DdlValleyScraper extends HtmlMediaScraper {
  private postScraper = new DdlValleyPostScraper();
  private linksScraper = new DdlValleyLinksScraper();

  private postRawTitleToMedia: Map<string, Media[]> = new Map<string, Media[]>();
  private mediaRawNameToScrapedMediaInfo: Map<string, HtmlScrapedMediaInfo> = new Map<string, HtmlScrapedMediaInfo>();

  public async scrapeInfo(searchTerm: string, fromPage = 0, pages = 1): Promise<Array<Media>> {
    if (searchTerm) {
      if (this.tryManageSearchTerm(searchTerm)) {
        return this.scrapeInfoInternal(fromPage, pages);
      } else {
        return new Array<Media>();
      }
    } else {
      this.customRoute = 'category/tv-shows';
      const scrapedMedia = await this.scrapeInfoInternal(fromPage, pages);
      this.customRoute = 'category/movies';
      scrapedMedia.push(...(await this.scrapeInfoInternal(fromPage, pages)));
      return scrapedMedia.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
    }
  }

  public async scrapeLinks(mediaRawName: string): Promise<Media> {
    const scrapedMediaInfo = this.mediaRawNameToScrapedMediaInfo.get(mediaRawName);
    if (scrapedMediaInfo) {
      if (!scrapedMediaInfo.media.linksPackageAvailable) {
        scrapedMediaInfo.media.linksPackages = await this.linksScraper.scrape(scrapedMediaInfo);
        return scrapedMediaInfo.media;
      } else {
        return scrapedMediaInfo.media;
      }
    } else {
      return null;
    }
  }

  private async scrapeInfoInternal(fromPage: number, pages: number): Promise<Array<Media>> {
    const scrapedMedia = new Array<Media>();
    try {
      this.currentPage = fromPage;
      const toPage = fromPage + pages;
      if (this.currentPage < toPage) {
        let htmlDocumentPromise = HtmlMediaScraper.getHtmlDocument(this.getNextPageUrl());
        let lastLoop;
        do {
          const htmlDocument = await htmlDocumentPromise;
          lastLoop = this.currentPage == toPage;
          if (!lastLoop) {
            htmlDocumentPromise = HtmlMediaScraper.getHtmlDocument(this.getNextPageUrl());
          }

          const posts = htmlDocument.find('.post');
          for (let i = 0; i < posts.length; i++) {
            const postRawTitle = this.postScraper.scrapeRawTitle(posts.eq(i));
            if (postRawTitle) {
              if (this.postRawTitleToMedia.has(postRawTitle)) {
                scrapedMedia.push(...this.postRawTitleToMedia.get(postRawTitle));
              } else {
                const postMediaArray = new Array<Media>();
                this.postRawTitleToMedia.set(postRawTitle, postMediaArray);
                for (const scrapedMediaInfo of await this.postScraper.scrape(postRawTitle, posts.eq(i), this.linksScraper)) {
                  if (scrapedMediaInfo) {
                    if (scrapedMediaInfo.media) {
                      postMediaArray.push(scrapedMediaInfo.media);
                      this.mediaRawNameToScrapedMediaInfo.set(scrapedMediaInfo.media.rawName, scrapedMediaInfo);
                      scrapedMedia.push(scrapedMediaInfo.media);
                    }
                  }
                }
              }
            }
          }
        } while (!lastLoop);
      }
    } catch (e) {
      console.error(e);
    } finally {
      return scrapedMedia;
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
