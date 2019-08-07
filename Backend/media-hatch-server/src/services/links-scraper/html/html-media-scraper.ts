import * as rp from 'request-promise-native';
import * as cheerio from 'cheerio';
import { MediaScraper } from 'media-hatch-core';

export abstract class HtmlMediaScraper extends MediaScraper {
  public static async getHtmlDocument(url: string, options?: rp.RequestPromiseOptions): Promise<Cheerio> {
    const response = await rp.get(url, options);
    return cheerio.load(response).root();
  }

  protected abstract get baseUrl();

  protected get pageRoute() {
    return 'page';
  }

  protected currentPage = 0;
  protected customRoute = '';
}
