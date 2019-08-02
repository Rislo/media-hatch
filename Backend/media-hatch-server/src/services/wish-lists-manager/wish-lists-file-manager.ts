import { FileSyncedStringSet } from '../utils/file-cache/file-synced-string-set';
import { WishListsManager } from './wish-lists-manager';
import { Media, Movie, TvShowEpisode } from 'media-hatch-core';
import { Injectable } from 'injection-js';

@Injectable()
export class WishListsFileManager extends WishListsManager {
  private static readonly defaultExtension = '.wishlist';

  public movies = new FileSyncedStringSet(`Movies${WishListsFileManager.defaultExtension}`);
  public tvShows = new FileSyncedStringSet(`TvShows${WishListsFileManager.defaultExtension}`);

  public addToWishList(media: Media) {
    const wishList = this.getWishListFromMedia(media);
    if (wishList) {
      wishList.addItem(media.name);
    }
  }

  public removeFromWishList(media: Media) {
    const wishList = this.getWishListFromMedia(media);
    if (wishList) {
      wishList.removeItem(media.name);
    }
  }

  private getWishListFromMedia(media: Media) {
    if (media instanceof Movie) {
      return this.movies;
    } else if (media instanceof TvShowEpisode) {
      return this.tvShows;
    } else {
      return null;
    }
  }
}
