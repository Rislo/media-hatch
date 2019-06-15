import { Media } from 'media-hatch-core';

export abstract class DownloadManager {
	public abstract download(media: Media);
}
