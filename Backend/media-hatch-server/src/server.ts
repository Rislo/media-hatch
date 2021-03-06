export const appRootDir = __dirname;

import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import compression from 'compression';
import routes from './services';
import * as ErrorHandler from './utils/error-handler';

process.on('uncaughtException', e => {
  console.error(e);
  process.exit(1);
});

process.on('unhandledRejection', e => {
  console.error(e);
  process.exit(1);
});

const router = express();

router.use(cors({ credentials: true, origin: true }));
router.use(parser.urlencoded({ extended: true }));
router.use(parser.json());
router.use(compression());

router.use('/', routes);

router.use((req: Request, res: Response) => {
  ErrorHandler.notFoundError();
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  ErrorHandler.clientError(err, res, next);
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  ErrorHandler.serverError(err, res, next);
});

const { PORT = 2000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
