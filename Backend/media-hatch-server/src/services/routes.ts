import { Router } from 'express';
import { Controller } from './controller';
import { rootInjector } from '../root-injector';

const router = Router();

const controller = rootInjector.get(Controller);
router.get('/scrape-info', controller.scrapeInfo);
router.get('/scrape-links', controller.scrapeLinks);
router.post('/request', controller.request);

export default router;
