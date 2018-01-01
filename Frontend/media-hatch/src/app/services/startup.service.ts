import { MediaDownloadService } from './media-download.service';
import { MediaInfoService } from './media-info.service';
import { Injectable } from '@angular/core';
import { setTimeout } from 'timers';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@Injectable()
export class StartupService {
  private _loaded = false;

  constructor(private mediaInfoService: MediaInfoService, private mediaDownloadService: MediaDownloadService) {}

  load(): Promise<any> {
    const wishListsPromise = this.mediaDownloadService.updateWishLists();
    const mediaInfoPromise = this.mediaInfoService.fetch();
    return Promise.all([wishListsPromise, mediaInfoPromise]).then(done => {
      this._loaded = true;
    });
  }

  get loaded(): boolean {
    return this._loaded;
  }
}
