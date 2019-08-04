import { Router } from 'express';
import allRoutes from './routes';
import { Factories } from 'media-hatch-core';

Factories.initialize();

const routes = Router();

routes.use('/api', allRoutes);

export default routes;
