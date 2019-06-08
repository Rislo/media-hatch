import { Request, Response, Router } from 'express';
import { DdlValleyScraper } from './html/ddl-valley/ddl-valley-scraper';
import { MediaScraperController } from './media-scraper-controller';

const router = Router();

const mediaScraper = new MediaScraperController();
router.get('/scrapeInfoAsync', mediaScraper.scrapeInfo);
router.get('/scrapeLinksAsync', mediaScraper.scrapeLinks);

export default router;
