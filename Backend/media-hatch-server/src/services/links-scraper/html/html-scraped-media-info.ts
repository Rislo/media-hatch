import { Media } from "media-hatch-core";

export class HtmlScrapedMediaInfo {
  public get media(): Media {
    return this._media;
  }

  public get pageUrl(): string {
    return this._pageUrl;
  }

  constructor(private _media: Media, private _pageUrl: string) {}
}
