import { DdlValleyScraper } from './links-scraper/html/ddl-valley/ddl-valley-scraper';
import { Request, Response } from 'express';
import * as Joi from '@hapi/joi';
import { Media, JsonToTypedHelper } from 'media-hatch-core';
import { Factories } from './utils/factories';
import { DownloadManagerWatchFolder } from './download-manager/download-manager-watch-folder';
import { HTTP404Error, HTTP400Error } from '../utils/http-errors';

export class Controller {
	private mediaScraper = new DdlValleyScraper();
	private downloadManager = new DownloadManagerWatchFolder();

	private scrapeInfoSchema = {
		searchTerm: Joi.string().optional(),
		fromPage: Joi.number(),
		pages: Joi.number()
	};

	private scrapeLinksSchema = {
		mediaRawName: Joi.string()
	};

	private downloadSchema = {
		mediaRawName: Joi.string()
	};

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

	public download = async (req: Request, res: Response) => {
		const params = await Joi.validate(req.body, this.downloadSchema);
		const media = await this.mediaScraper.scrapeLinks(params.mediaRawName);
		if (media) {
			await this.downloadManager.download(media); // TODO update wishlists, add a file-cache service to manage list of strings

			res.status(200).send();
		} else {
			throw new HTTP404Error(`Media '${params.mediaRawName}' not found`);
		}
	};
}
