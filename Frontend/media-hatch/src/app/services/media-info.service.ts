import { MediaDownloadService } from './media-download.service';
import { WoopsaService } from './../woopsa/woopsa.service';
import { Injectable } from '@angular/core';
import { Media, TvShowEpisode, Movie } from 'media-hatch-core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'util';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { WoopsaValue } from '../woopsa/woopsaValue';

@Injectable()
export class MediaInfoService extends WoopsaService {
  private mediaInfo = new BehaviorSubject<Media[]>(new Array<Media>());
  private lastFetchPromise = Promise.resolve<Media[]>(new Array<Media>());
  private currentPage = 0;

  fetching = false;
  searchTerm$ = new BehaviorSubject<string>(undefined);
  lastMediaInfoFetched = this.mediaInfo.asObservable();
  cancelFetch = false;

  constructor(private mediaDownloadService: MediaDownloadService) {
    super();
    let hostname = 'localhost';
    if (window.location.hostname) {
      hostname = window.location.hostname;
    }
    this.setUrl(`http://${hostname}:2000/woopsa`);
    this.searchTerm$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.currentPage = 0;
        if (!isUndefined(term)) {
          this.mediaInfo.next(new Array<Media>());
          this.fetch(term);
        }
      });
  }

  public fetch(searchTerm: string = null): Promise<Media[]> {
    this.cancelFetch = true;
    return this.lastFetchPromise.then(done => {
      this.fetching = true;
      return this.internalFetch(
        searchTerm ? searchTerm : this.searchTerm$.value
      );
    });
  }

  private internalFetch(searchTerm: string = null): Promise<Media[]> {
    this.cancelFetch = false;
    let validSearchTerm = '';
    if (searchTerm) {
      validSearchTerm = searchTerm;
    }
    this.lastFetchPromise = this.invoke('scrapeInfoAsync', {
      searchTerm: validSearchTerm,
      fromPage: this.currentPage,
      pages: 2
    }).then(value => {
      this.currentPage += 2;
      return this.mediaArrayFromScrape(value);
    });
    return this.lastFetchPromise;
  }

  private mediaArrayFromScrape(
    scrapeReturn: WoopsaValue,
    concat = true
  ): Promise<Media[]> {
    try {
      const mediaArray = new Array<Media>();
      for (const mediaObject of JSON.parse(scrapeReturn.asText)) {
        if (mediaObject.type === TvShowEpisode.typeName) {
          mediaArray.push(Object.assign(new TvShowEpisode(), mediaObject));
        } else if (mediaObject.type === Movie.typeName) {
          mediaArray.push(Object.assign(new Movie(), mediaObject));
        }
      }
      if (this.cancelFetch) {
        return Promise.resolve(new Array<Media>());
      } else {
        return this.mediaDownloadService
          .updateProcessedMediaRawNames(mediaArray)
          .then(completed => {
            if (!concat) {
              this.mediaInfo.next(mediaArray);
            } else {
              this.mediaInfo.next(this.mediaInfo.value.concat(mediaArray));
            }
            this.fetching = false;
            return mediaArray;
          });
      }
    } catch (e) {
      this.fetching = false;
      return Promise.resolve(new Array<Media>());
    }
  }
}
