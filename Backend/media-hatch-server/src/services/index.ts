import { Router } from 'express';
import linksScraperRoutes from './links-scraper/routes';
import { Factories } from './utils/factories';
import { TvShowEpisode, Movie } from 'media-hatch-core';

Factories.register(Movie.typeName, Movie);
Factories.register(TvShowEpisode.typeName, TvShowEpisode);

const routes = Router();

routes.use('/', linksScraperRoutes);

export default routes;
