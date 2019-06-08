import { Router } from 'express';
import linksScraperRoutes from './links-scraper/routes';

const routes = Router();

routes.use('/', linksScraperRoutes);

export default routes;
