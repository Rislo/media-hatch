import { Media } from './media';
import { LinksPackage } from './links-package';

export abstract class MediaScraper {
  public abstract scrapeInfo(searchTerm: string): Promise<Iterable<Media>>;
  protected _scrapedMedia: Media[] = new Array<Media>();
  public get scrapedMedia(): string {
    return JSON.stringify(this._scrapedMedia);
  }
  public abstract scrapeLinks(mediaRawName: string): Promise<LinksPackage[]>;
}
