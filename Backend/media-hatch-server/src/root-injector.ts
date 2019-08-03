import { MediaScraper } from 'media-hatch-core';
import { DdlValleyScraper } from './services/links-scraper/html/ddl-valley/ddl-valley-scraper';
import { RequestManager } from './services/request-manager/request-manager';
import { RequestManagerWatchFolder } from './services/request-manager/request-manager-watch-folder';
import { WishListsManager } from './services/wish-lists-manager/wish-lists-manager';
import { WishListsFileManager } from './services/wish-lists-manager/wish-lists-file-manager';
import { Controller } from './services/controller';
import { MediaHatchService } from './services/media-hatch-service';
import { ReflectiveInjector } from 'injection-js';

export const rootInjector = ReflectiveInjector.resolveAndCreate([
  {
    provide: MediaScraper,
    useClass: DdlValleyScraper
  },
  {
    provide: RequestManager,
    useClass: RequestManagerWatchFolder
  },
  {
    provide: WishListsManager,
    useClass: WishListsFileManager
  },
  MediaHatchService,
  Controller
]);
