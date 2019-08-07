import * as fs from 'fs-extra';
import { Media, TvShowEpisode, Factories } from 'media-hatch-core';
import * as path from 'path';
import { FileNameSanitizer } from '../utils/file-name-sanitizer';
import { RequestManager } from './request-manager';
import { Injectable } from 'injection-js';
import { appRootDir } from '../../server';

@Injectable()
export class RequestManagerWatchFolder extends RequestManager {
  private static readonly defaultOptionsFile = 'dlrequests.options';
  private static readonly defaultLinksFileExtension = '.crawljob';
  private static readonly linksFileAddedFolderName = 'added';

  private static readonly mediaTypeWatchFolderSeparator = ';';

  private orderedFavoriteFileHosts = new Array<string>();
  private mediaFactoryToWatchFolderPath = new Map<new () => object, string>();
  private mediaFactoryToDownloadFolderPath = new Map<new () => object, string>();
  private downloadFolderPerTvShow = false;

  constructor() {
    super();
    this.initializeOptions();
  }

  private async initializeOptions() {
    const optionsPath = path.join(appRootDir, RequestManagerWatchFolder.defaultOptionsFile);
    const fileOptions = (await fs.readFile(optionsPath, 'utf8')).replace(/^\ufeff/, ''); // removes BOM if present
    const options = fileOptions.split(/\r?\n/);
    for (const option of options) {
      if (option.includes(RequestManagerWatchFolder.mediaTypeWatchFolderSeparator)) {
        const mediaTypeFolderPaths = option.split(RequestManagerWatchFolder.mediaTypeWatchFolderSeparator);
        if (mediaTypeFolderPaths.length > 0) {
          const factory = Factories.getFactory(mediaTypeFolderPaths[0]);
          if (factory != null) {
            this.mediaFactoryToWatchFolderPath.set(factory, mediaTypeFolderPaths.length > 1 ? mediaTypeFolderPaths[1] : '');
            this.mediaFactoryToDownloadFolderPath.set(factory, mediaTypeFolderPaths.length > 2 ? mediaTypeFolderPaths[2] : '');
          }
        }
      } else if (option === 'downloadFolderPerTvShow') {
        this.downloadFolderPerTvShow = true;
      } else {
        this.orderedFavoriteFileHosts.push(option);
      }
    }
  }

  public async request(media: Media): Promise<void> {
    if (media.linksPackageAvailable) {
      await this.internalRequest(media);
    }
  }

  public async getRequestedMediaFilePathSupportedFullNames(): Promise<string[]> {
    const processedMediaFullNames = new Array<string>();
    for (const folder of this.mediaFactoryToWatchFolderPath.values()) {
      try {
        processedMediaFullNames.push(
          ...(await fs.readdir(folder))
            .filter(s => s.endsWith(RequestManagerWatchFolder.defaultLinksFileExtension))
            .map(s => path.basename(s, path.extname(s)))
        );
      } catch {}
      try {
        processedMediaFullNames.push(
          ...(await fs.readdir(path.join(folder, RequestManagerWatchFolder.linksFileAddedFolderName)))
            .filter(s => s.endsWith(RequestManagerWatchFolder.defaultLinksFileExtension))
            .map(s => path.basename(s, path.extname(s)))
        );
      } catch {}
    }
    return [...new Set(processedMediaFullNames)];
  }

  private async internalRequest(media: Media): Promise<void> {
    const mediaFactory = Factories.getFactory(media.type);
    if (this.mediaFactoryToWatchFolderPath.has(mediaFactory)) {
      const watchFolderPath = this.mediaFactoryToWatchFolderPath.get(mediaFactory);
      if (await fs.pathExists(watchFolderPath)) {
        const filePathSupportedMediaFullName = FileNameSanitizer.sanitizeFullName(media);
        const fileName = filePathSupportedMediaFullName + RequestManagerWatchFolder.defaultLinksFileExtension;
        const filePath = path.join(watchFolderPath, fileName);
        const addedFilePath = path.join(watchFolderPath, RequestManagerWatchFolder.linksFileAddedFolderName, fileName);
        if (!(await fs.pathExists(addedFilePath))) {
          let crawlJobContent = `autoStart=TRUE\nautoConfirm=TRUE\ntext=${
            media.getFirstFavoriteLinksPackage(this.orderedFavoriteFileHosts).concatenatedLinks
          }\npackageName=${filePathSupportedMediaFullName}\ncomment=${filePathSupportedMediaFullName}`;
          if (this.mediaFactoryToDownloadFolderPath.has(mediaFactory)) {
            let downloadFolderPath = this.mediaFactoryToDownloadFolderPath.get(mediaFactory);
            if (this.downloadFolderPerTvShow && media instanceof TvShowEpisode) {
              downloadFolderPath = path.join(downloadFolderPath, FileNameSanitizer.sanitizeName(media));
            }
            crawlJobContent += `\ndownloadFolder=${downloadFolderPath}`;
          }
          await fs.writeFile(filePath, crawlJobContent);
          media.requested = true;
        }
      }
    }
  }
}
