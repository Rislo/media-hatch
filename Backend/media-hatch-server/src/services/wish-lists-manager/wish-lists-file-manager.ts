import { FileSyncedStringSet } from '../utils/file-cache/file-synced-string-set';
import { WishListsManager } from './wish-lists-manager';
import { Movie, TvShowEpisode } from 'media-hatch-core';
import { Injectable } from 'injection-js';
import * as path from 'path';
import { appRootDir } from '../../server';

@Injectable()
export class WishListsFileManager extends WishListsManager {
  private static readonly defaultExtension = '.wishlist';

  public movies = new FileSyncedStringSet(path.join(appRootDir, `Movies${WishListsFileManager.defaultExtension}`));
  public tvShows = new FileSyncedStringSet(path.join(appRootDir, `TvShows${WishListsFileManager.defaultExtension}`));

  public addToWishList(mediaName: string, type: new () => object) {
    const wishList = this.getWishListFromType(type);
    if (wishList) {
      wishList.addItem(mediaName);
      return true;
    }
    return false;
  }

  public removeFromWishList(mediaName: string, type: new () => object) {
    const wishList = this.getWishListFromType(type);
    if (wishList) {
      wishList.removeItem(mediaName);
    }
  }

  public async getWishList(type: new () => object) {
    return Array.from(await this.getWishListFromType(type).getCurrentItems());
  }

  private getWishListFromType(type: new () => object) {
    if (type === Movie) {
      return this.movies;
    } else if (type === TvShowEpisode) {
      return this.tvShows;
    } else {
      return null;
    }
  }
}
