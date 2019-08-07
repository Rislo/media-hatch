import { Injectable } from '@angular/core';
import { HttpJsonToObjectService, ConsoleLoggerService } from 'concept';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Media, Factories } from 'media-hatch-core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaWishListsService extends HttpJsonToObjectService {
  private wishListsInitialization: Promise<void>;
  private wishLists = new Map<string, string[]>();

  private collator = new Intl.Collator(undefined, { sensitivity: 'base' });

  constructor(http: HttpClient, logger: ConsoleLoggerService) {
    super(http, logger, `${environment.apiExtensionUrl}/wish-list`);
    this.wishListsInitialization = this.initializeWishLists();
  }

  public async addToWishList(media: Media): Promise<boolean> {
    const wishList = await this.getWishList(media.type);
    if (wishList && !this.internalIsInWishList(wishList, media)) {
      return this.post('/add', { mediaName: media.name, mediaType: media.type })
        .pipe(
          map(success => {
            if (success === true) {
              wishList.push(media.name);
              return true;
            }
            return false;
          })
        )
        .toPromise();
    } else {
      return false;
    }
  }

  public async isInWishList(media: Media): Promise<boolean> {
    const wishList = await this.getWishList(media.type);
    if (wishList) {
      return this.internalIsInWishList(wishList, media);
    }
    return false;
  }

  private internalIsInWishList(wishList: string[], media: Media): boolean {
    return wishList.findIndex(n => this.collator.compare(n, media.name) === 0) >= 0;
  }

  private async getWishList(mediaTypeId: string) {
    await this.wishListsInitialization;
    return this.wishLists.get(mediaTypeId);
  }

  private async initializeWishLists(): Promise<void> {
    const e = Media.name;
    const mediaTypeIds = Factories.getIdsInheriting(Media.name);
    for (const mediaTypeId of mediaTypeIds) {
      try {
        const wishList = await this.get('', { params: this.setHttpParams('mediaType', mediaTypeId) })
          .pipe(map(value => value as string[]))
          .toPromise();
        this.wishLists.set(mediaTypeId, wishList);
      } catch {}
    }
  }
}
