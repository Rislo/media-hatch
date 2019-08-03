import { Injectable } from 'injection-js';
import { MediaScraper, Movie, Media, TvShowEpisode } from 'media-hatch-core';
import { RequestManager } from './request-manager/request-manager';
import { WishListsManager } from './wish-lists-manager/wish-lists-manager';
import { FileNameSanitizer } from './utils/file-name-sanitizer';

@Injectable()
export class MediaHatchService {
  private defaultCycleInterval = 30 * 60 * 1000;
  private eligibleMovieTags = ['bdrip'];

  constructor(private mediaScraper: MediaScraper, private requestManager: RequestManager, private wishListsManager: WishListsManager) {
    this.lookForNewMedia();
  }

  public lookForNewMedia = async () => {
    try {
      const moviesToLookFor = await this.wishListsManager.getWishList(Movie);
      const tvShowsToLookFor = await this.wishListsManager.getWishList(TvShowEpisode);
      const scrapedMediaArray = await this.scrapeInfo('', 0, 2);
      var collator = new Intl.Collator(undefined, { sensitivity: 'base' });
      const mediaToRequest = new Array<Media>();
      for (const scrapedMedia of scrapedMediaArray) {
        if (
          (scrapedMedia instanceof TvShowEpisode && tvShowsToLookFor.findIndex(n => collator.compare(n, scrapedMedia.name) === 0) >= 0) ||
          (scrapedMedia instanceof Movie &&
            moviesToLookFor.findIndex(n => collator.compare(n, scrapedMedia.name) === 0) >= 0 &&
            scrapedMedia.tags.filter(t => this.eligibleMovieTags.findIndex(et => collator.compare(t, et) === 0) >= 0).length ===
              this.eligibleMovieTags.length)
        ) {
          mediaToRequest.push(scrapedMedia);
        }
      }
      for (const media of mediaToRequest) {
        this.request(media.rawName);
      }
      setTimeout(this.lookForNewMedia, this.defaultCycleInterval);
    } catch (error) {
      console.error(`Unexpected error occured => ${error}`);
    }
  };

  public async scrapeInfo(searchTerm: string, fromPage = 0, pages = 1) {
    const mediaArray = await this.mediaScraper.scrapeInfo(searchTerm, fromPage, pages);
    const requestedFilePathSupportedFullNames = await this.requestManager.getRequestedMediaFilePathSupportedFullNames();
    for (const media of mediaArray) {
      media.requested = requestedFilePathSupportedFullNames.includes(FileNameSanitizer.sanitizeFullName(media));
    }
    return mediaArray;
  }

  public async request(mediaRawName: string): Promise<Media> {
    const media = await this.mediaScraper.scrapeLinks(mediaRawName);
    if (media) {
      await this.requestManager.request(media);
      if (media.requested && media instanceof Movie) {
        this.wishListsManager.removeFromWishList(media.name, Movie);
      }
    }
    return media;
  }
}
