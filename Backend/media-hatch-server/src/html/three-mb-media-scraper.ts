import { ThreeMbPostScraper } from "./three-mb-post-scraper";
import { ThreeMbLinksScraper } from "./three-mb-links-scraper";
import { ThreeMbScrapedMediaInfo } from "./three-mb-scraped-media-info";

import * as WebRequest from "web-request";
import * as cheerio from "cheerio";
import { MediaScraper, Media, LinksPackage } from "media-hatch-core";

export class ThreeMbMediaScraper extends MediaScraper {
  private static readonly baseUrl = "https://www.300mbfilms.co";

  public static getHtmlDocument(
    url: string,
    options?: WebRequest.RequestOptions
  ): Promise<Cheerio> {
    return WebRequest.get(url, options).then(response =>
      cheerio.load(response.content).root()
    );
  }

  private postScraper = new ThreeMbPostScraper();

  private linksScraper = new ThreeMbLinksScraper();

  private maxPageNbScrap: number;

  private mediaRawNameToScrapedMediaInfo: Map<
    string,
    ThreeMbScrapedMediaInfo
    > = new Map<string, ThreeMbScrapedMediaInfo>();

  constructor(maxPageNbScrap: number = 10, customRoute: string = "") {
    super();
    this.maxPageNbScrap = maxPageNbScrap;
    this.customRoute = customRoute;
  }

  public scrapeInfo(searchTerm: string): Promise<Iterable<Media>> {
    this.clear();
    if (searchTerm) {
      this.customRoute = `?s=${encodeURIComponent(searchTerm)}`;
    } else {
      this.customRoute = "";
    }
    let promises = new Array<Promise<Media[]>>();
    while (this.currentPage < this.maxPageNbScrap) {
      promises.push(
        ThreeMbMediaScraper.getHtmlDocument(this.getNextPageUrl()).then(
          htmlDocument => {
            const posts = htmlDocument.find(".post");
            const pageMedia = new Array<Media>();
            for (let i = 0; i < posts.length; i++) {
              const scrapedMediaInfo = this.postScraper.Scrape(posts.eq(i));
              if (scrapedMediaInfo) {
                pageMedia.push(scrapedMediaInfo.media);
                this.mediaRawNameToScrapedMediaInfo.set(
                  scrapedMediaInfo.media.rawName,
                  scrapedMediaInfo
                );
              } else {
                return pageMedia;
              }
            }
            return pageMedia;
          }
        )
      );
    }
    return Promise.all(promises).then(pagesMedia => {
      for (const pageMedia of pagesMedia) {
        this._scrapedMedia.push(...pageMedia);
      }
      return this._scrapedMedia;
    }).catch(error => {
      const a = 0;
      return new Array<Media>();
    });
  }

  public scrapeLinks(mediaRawName: string): Promise<LinksPackage[]> {
    const scrapedMediaInfo = this.mediaRawNameToScrapedMediaInfo.get(
      mediaRawName
    );
    if (scrapedMediaInfo) {
      return this.linksScraper.scrape(scrapedMediaInfo);
    } else {
      return Promise.reject("Media not found");
    }
  }

  private clear() {
    this.currentPage = 0;
    this._scrapedMedia = new Array<Media>();
    this.mediaRawNameToScrapedMediaInfo.clear();
  }

  private getNextPageUrl(): string {
    this.currentPage++;
    if (this.currentPage == 1)
      return `${ThreeMbMediaScraper.baseUrl}/${this.customRoute}`;
    else
      return `${ThreeMbMediaScraper.baseUrl}/page/${this.currentPage}${
        this.customRoute
        }`;
  }

  private currentPage = 0;
  private customRoute = "";
}
