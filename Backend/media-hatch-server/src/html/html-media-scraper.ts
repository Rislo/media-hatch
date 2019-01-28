import * as WebRequest from "web-request";
import * as cheerio from "cheerio";
import { MediaScraper, Media } from "media-hatch-core";

export abstract class HtmlMediaScraper extends MediaScraper {
  public static getHtmlDocument(
    url: string,
    options?: WebRequest.RequestOptions
  ): Promise<Cheerio> {
    return WebRequest.get(url, options).then(response =>
      cheerio.load(response.content).root()
    );
  }

  protected abstract get baseUrl();

  protected get pageRoute() {
    return "page";
  }

  protected clear() {
    this._scrapedMedia = new Array<Media>();
  }

  protected currentPage = 0;
  protected customRoute = "";
}
