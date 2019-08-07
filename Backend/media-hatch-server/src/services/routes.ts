import { Router } from 'express';
import { Controller } from './controller';
import { rootInjector } from '../root-injector';

const router = Router();

const controller: Controller = rootInjector.get(Controller);
router.get('/media', controller.scrapeInfo);
router.post('/request', controller.request);
router.get('/wish-list', controller.getWishList);
router.post('/wish-list/add', controller.addToWishList);

export default router;
