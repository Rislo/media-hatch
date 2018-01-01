import { MediaDownloadService } from './media-download.service';
import { WoopsaService } from './../woopsa/woopsa.service';
import { Injectable } from '@angular/core';
import { Media, TvShowEpisode, Movie } from 'media-hatch-core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'util';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class MediaInfoService extends WoopsaService {
  private mediaInfo = new BehaviorSubject<Media[]>(new Array<Media>());
  private lastFetchPromise = Promise.resolve<Media[]>(new Array<Media>());

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
        if (!isUndefined(term)) {
          this.fetch(term);
        }
      });
  }

  public fetch(searchTerm: string = null): Promise<Media[]> {
    this.cancelFetch = true;
    return this.lastFetchPromise.then(done => {
      this.fetching = true;
      return this.internalFetch(searchTerm);
    });
  }

  private internalFetch(searchTerm: string = null): Promise<Media[]> {
    this.cancelFetch = false;
    let validSearchTerm = '';
    if (searchTerm) {
      validSearchTerm = searchTerm;
    }
    this.lastFetchPromise = this.invoke('scrapeInfoAsync', { searchTerm: validSearchTerm })
      .then(value => {
        const mediaArray = new Array<Media>();
        for (const mediaObject of JSON.parse(value.asText)) {
          if (mediaObject.type === TvShowEpisode.typeName) {
            mediaArray.push(Object.assign(new TvShowEpisode(), mediaObject));
          } else if (mediaObject.type === Movie.typeName) {
            mediaArray.push(Object.assign(new Movie(), mediaObject));
          }
        }
        if (this.cancelFetch) {
          return new Array<Media>();
        } else {
          return this.mediaDownloadService.updateProcessedMediaRawNames(mediaArray).then(completed => {
            this.mediaInfo.next(mediaArray);
            this.fetching = false;
            return mediaArray;
          });
        }
      })
      .catch(error => {
        this.fetching = false;
        return new Array<Media>();
      });
    return this.lastFetchPromise;
  }
}
