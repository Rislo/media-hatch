import { Injectable } from '@angular/core';
import { HttpJsonToObjectService, ConsoleLoggerService } from 'concept';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isUndefined } from 'util';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Media, TvShowEpisode, Movie } from 'media-hatch-core';

@Injectable({
  providedIn: 'root'
})
export class MediaInfoService extends HttpJsonToObjectService {
  private mediaInfo = new BehaviorSubject<Media[]>(new Array<Media>());
  private lastFetchPromise = Promise.resolve<Media[]>(new Array<Media>());
  private currentPage = 0;

  fetching = false;
  searchTerm$ = new BehaviorSubject<string>(undefined);
  lastMediaInfoFetched = this.mediaInfo.asObservable();
  cancelFetch = false;

  constructor(http: HttpClient, logger: ConsoleLoggerService) {
    super(http, logger, `${environment.apiExtensionUrl}`);
    this.searchTerm$
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
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
      return this.internalFetch(searchTerm ? searchTerm : this.searchTerm$.value);
    });
  }

  private internalFetch(searchTerm: string = null): Promise<Media[]> {
    this.cancelFetch = false;
    let validSearchTerm = '';
    if (searchTerm) {
      validSearchTerm = searchTerm;
    }
    let httpParams = this.setHttpParams('searchTerm', validSearchTerm);
    httpParams = this.setHttpParams('fromPage', this.currentPage, httpParams);
    httpParams = this.setHttpParams('pages', 2, httpParams);
    this.lastFetchPromise = this.get('/media', { params: httpParams })
      .pipe(
        map(value => {
          this.currentPage += 2;
          return this.typedMediaArrayFromObjectArray(value);
        })
      )
      .toPromise();
    return this.lastFetchPromise;
  }

  private typedMediaArrayFromObjectArray(objects): Media[] {
    try {
      const mediaArray = new Array<Media>();
      for (const mediaObject of objects) {
        if (mediaObject.type === TvShowEpisode.typeName) {
          mediaArray.push(Object.assign(new TvShowEpisode(), mediaObject));
        } else if (mediaObject.type === Movie.typeName) {
          mediaArray.push(Object.assign(new Movie(), mediaObject));
        }
      }
      if (this.cancelFetch) {
        return new Array<Media>();
      } else {
        this.mediaInfo.next(this.mediaInfo.value.concat(mediaArray));
        this.fetching = false;
        return mediaArray;
      }
    } catch (e) {
      this.fetching = false;
      return new Array<Media>();
    }
  }
}
