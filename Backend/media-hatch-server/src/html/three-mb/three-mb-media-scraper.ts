// import { ThreeMbPostScraper } from "./three-mb-post-scraper";
// import { ThreeMbLinksScraper } from "./three-mb-links-scraper";
// import { HtmlScrapedMediaInfo } from "../html-scraped-media-info";

// import { Media, LinksPackage } from "media-hatch-core";
// import { HtmlMediaScraper } from "../html-media-scraper";

// export class ThreeMbMediaScraper extends HtmlMediaScraper {
//   protected get baseUrl() {
//     return "https://www.300mbfilms.co";
//   }

//   private postScraper = new ThreeMbPostScraper();

//   private linksScraper = new ThreeMbLinksScraper();

//   private mediaRawNameToScrapedMediaInfo: Map<
//     string,
//     HtmlScrapedMediaInfo
//   > = new Map<string, HtmlScrapedMediaInfo>();

//   public scrapeInfo(searchTerm: string): Promise<Iterable<Media>> {
//     this.clear();
//     if (searchTerm) {
//       this.customRoute = `?s=${encodeURIComponent(searchTerm)}`;
//     } else {
//       this.customRoute = "";
//     }
//     let promises = new Array<Promise<Media[]>>();
//     while (this.currentPage < this.maxPageNbScrap) {
//       promises.push(
//         HtmlMediaScraper.getHtmlDocument(this.getNextPageUrl()).then(
//           htmlDocument => {
//             const posts = htmlDocument.find(".post");
//             const pageMedia = new Array<Media>();
//             for (let i = 0; i < posts.length; i++) {
//               const scrapedMediaInfo = this.postScraper.Scrape(posts.eq(i));
//               if (scrapedMediaInfo) {
//                 pageMedia.push(scrapedMediaInfo.media);
//                 this.mediaRawNameToScrapedMediaInfo.set(
//                   scrapedMediaInfo.media.rawName,
//                   scrapedMediaInfo
//                 );
//               } else {
//                 return pageMedia;
//               }
//             }
//             return pageMedia;
//           }
//         )
//       );
//     }
//     return Promise.all(promises)
//       .then(pagesMedia => {
//         for (const pageMedia of pagesMedia) {
//           this._scrapedMedia.push(...pageMedia);
//         }
//         return this._scrapedMedia;
//       })
//       .catch(error => {
//         return new Array<Media>();
//       });
//   }

//   public scrapeLinks(mediaRawName: string): Promise<LinksPackage[]> {
//     const scrapedMediaInfo = this.mediaRawNameToScrapedMediaInfo.get(
//       mediaRawName
//     );
//     if (scrapedMediaInfo) {
//       return this.linksScraper.scrape(scrapedMediaInfo);
//     } else {
//       return Promise.reject("Media not found");
//     }
//   }

//   protected getNextPageUrl(): string {
//     this.currentPage++;
//     if (this.currentPage == 1) return `${this.baseUrl}/${this.customRoute}`;
//     else
//       return `${this.baseUrl}/${this.pageRoute}/${this.currentPage}${
//         this.customRoute
//       }`;
//   }

//   protected clear() {
//     super.clear();
//     this.mediaRawNameToScrapedMediaInfo.clear();
//   }
// }
