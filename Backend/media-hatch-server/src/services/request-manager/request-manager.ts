import { Media } from 'media-hatch-core';

export abstract class RequestManager {
  public abstract request(media: Media): Promise<void>;
  public abstract getRequestedMediaFilePathSupportedFullNames(): Promise<string[]>;
}
