import 'reflect-metadata';
import * as Joi from '@hapi/joi';
import { Request, Response } from 'express';

import { HTTP404Error } from '../utils/http-errors';
import { Injectable } from 'injection-js';
import { MediaScraper, Movie } from 'media-hatch-core';
import { RequestManager } from './request-manager/request-manager';
import { WishListsManager } from './wish-lists-manager/wish-lists-manager';
import { FileNameSanitizer } from './utils/file-name-sanitizer';
import { Factories } from './utils/factories';
import { MediaHatchService } from './media-hatch-service';

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

  private getWishListSchema = {
    mediaType: Joi.string().required()
  };

  private addToWishListSchema = {
    mediaName: Joi.string().required(),
    mediaType: Joi.string().required()
  };

  constructor(
    private mediaHatchService: MediaHatchService,
    private mediaScraper: MediaScraper,
    private wishListsManager: WishListsManager
  ) {}

  public scrapeInfo = async (req: Request, res: Response) => {
    const params = await Joi.validate(req.query, this.scrapeInfoSchema);
    res.status(200).send(await this.mediaHatchService.scrapeInfo(params.searchTerm, params.fromPage, params.pages));
  };

  public request = async (req: Request, res: Response) => {
    const body = await Joi.validate(req.body, this.requestSchema);
    const media = await this.mediaHatchService.request(body.mediaRawName);
    if (media) {
      res.status(200).send(media.requested);
    } else {
      throw new HTTP404Error(`Media '${body.mediaRawName}' not found`);
    }
  };

  public addToWishList = async (req: Request, res: Response) => {
    const body = await Joi.validate(req.body, this.addToWishListSchema);
    res.status(200).send(this.wishListsManager.addToWishList(body.mediaName, this.getMediaTypeOrThrowNotFound(body.mediaType)));
  };

  public getWishList = async (req: Request, res: Response) => {
    const params = await Joi.validate(req.query, this.getWishListSchema);
    res.status(200).send(await this.wishListsManager.getWishList(this.getMediaTypeOrThrowNotFound(params.mediaType)));
  };

  private getMediaTypeOrThrowNotFound(typeId: string) {
    const type = Factories.getFactory(typeId);
    if (type) {
      return type;
    } else {
      throw new HTTP404Error(`Media of type ${typeId} could not be resolved.`);
    }
  }
}
