import { Media } from './media';

export abstract class MediaScraper {
  public abstract scrapeInfo(searchTerm: string, fromPage: number, pages: number): Promise<Array<Media>>;
  public abstract scrapeLinks(mediaRawName: string): Promise<Media>;
}
