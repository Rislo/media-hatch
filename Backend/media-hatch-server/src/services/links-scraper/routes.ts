import { Router } from 'express';
import { Controller } from '../controller';

const router = Router();

const controller = new Controller();
router.get('/scrapeInfoAsync', controller.scrapeInfo);
router.get('/scrapeLinksAsync', controller.scrapeLinks);
router.post('/download', controller.download);

export default router;
