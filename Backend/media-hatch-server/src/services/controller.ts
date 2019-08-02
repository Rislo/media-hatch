import 'reflect-metadata';
import * as Joi from '@hapi/joi';
import { Request, Response } from 'express';

import { HTTP404Error } from '../utils/http-errors';
import { Injectable } from 'injection-js';
import { MediaScraper } from 'media-hatch-core';
import { RequestManager } from './request-manager/request-manager';
import { WishListsManager } from './wish-lists-manager/wish-lists-manager';

@Injectable()
export class Controller {
  private scrapeInfoSchema = {
    searchTerm: Joi.string().optional(),
    fromPage: Joi.number().optional(),
    pages: Joi.number().optional()
  };

  private scrapeLinksSchema = {
    mediaRawName: Joi.string().required()
  };

  private requestSchema = {
    mediaRawName: Joi.string().required()
  };

  constructor(private mediaScraper: MediaScraper, private requestManager: RequestManager, private wishListsManager: WishListsManager) {}

  public scrapeInfo = async (req: Request, res: Response) => {
    const params = await Joi.validate(req.query, this.scrapeInfoSchema);
    const result = await this.mediaScraper.scrapeInfo(params.searchTerm, params.fromPage, params.pages);
    res.status(200).send(result);
  };

  public scrapeLinks = async (req: Request, res: Response) => {
    const params = await Joi.validate(req.query, this.scrapeLinksSchema);
    const result = await this.mediaScraper.scrapeLinks(params.mediaRawName);
    if (result) {
      res.status(200).send(result.linksPackages);
    } else {
      throw new HTTP404Error(`Media '${params.mediaRawName}' not found`);
    }
  };

  public request = async (req: Request, res: Response) => {
    const body = await Joi.validate(req.body, this.requestSchema);
    const media = await this.mediaScraper.scrapeLinks(body.mediaRawName);
    if (media) {
      await this.requestManager.request(media);
      // TODO check if media requested before removing from wish list (use request property once media-hatch-core updated)
      this.wishListsManager.removeFromWishList(media);
      res.status(200).send();
    } else {
      throw new HTTP404Error(`Media '${body.mediaRawName}' not found`);
    }
  };
}
