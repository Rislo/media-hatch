import { Router } from 'express';
import allRoutes from './routes';
import { Factories } from './utils/factories';
import { TvShowEpisode, Movie } from 'media-hatch-core';

Factories.register(Movie.typeName, Movie);
Factories.register(TvShowEpisode.typeName, TvShowEpisode);

const routes = Router();

routes.use('/', allRoutes);

export default routes;
