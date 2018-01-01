import { Media, TvShowEpisode, Movie } from 'media-hatch-core';
import { WoopsaService } from './../woopsa/woopsa.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaDownloadService extends WoopsaService {
  private processedMediaRawNames = new Array<string>();
  private tvShowsWishList = new Array<string>();
  private moviesWishList = new Array<string>();

  constructor() {
    super();
    let hostname = 'localhost';
    if (window.location.hostname) {
      hostname = window.location.hostname;
    }
    this.setUrl(`http://${hostname}:2001/mediahatchservices`);
  }

  public download(media: Media): Promise<boolean> {
    return this.invoke('Download', { media: JSON.stringify(media) }).then(value => {
      if (value && value.asText === 'true') {
        this.processedMediaRawNames.push(media.rawName);
        return true;
      } else {
        return false;
      }
    });
  }

  public addToWishList(media: Media): Promise<void> {
    if (!this.isInWishList(media)) {
      if (media instanceof TvShowEpisode) {
        return this.invoke('AddTvShowToWishList', { name: media.name }).then(success => {
          this.tvShowsWishList.push(media.name);
        });
      } else if (media instanceof Movie) {
        return this.invoke('AddMovieToWishList', { name: media.name }).then(success => {
          this.moviesWishList.push(media.name);
        });
      }
    }
    return Promise.resolve();
  }

  public updateProcessedMediaRawNames(scrapedMedia: Media[]): Promise<void> {
    return this.invoke('GetAlreadyProcessedMediaRawNames', { scrapedMediaList: JSON.stringify(scrapedMedia) }).then(value => {
      if (value) {
        this.processedMediaRawNames = Object.assign(new Array<string>(), JSON.parse(value.asText));
      }
    });
  }

  public updateWishLists(): Promise<any> {
    const tvShowsWishListPromise = this.read('TvShowsWishList').then(value => {
      if (value) {
        this.tvShowsWishList = Object.assign(new Array<string>(), JSON.parse(value.asText));
      }
    });
    const moviesWishListPromise = this.read('MoviesWishList').then(value => {
      if (value) {
        this.moviesWishList = Object.assign(new Array<string>(), JSON.parse(value.asText));
      }
    });
    return Promise.all([tvShowsWishListPromise, moviesWishListPromise]);
  }

  public isProcessed(media: Media): boolean {
    return this.processedMediaRawNames.indexOf(media.rawName) >= 0;
  }

  public isInWishList(media: Media): boolean {
    if (media instanceof TvShowEpisode) {
      return this.tvShowsWishList.indexOf(media.name) >= 0;
    } else if (media instanceof Movie) {
      return this.moviesWishList.indexOf(media.name) >= 0;
    } else {
      return false;
    }
  }
}
