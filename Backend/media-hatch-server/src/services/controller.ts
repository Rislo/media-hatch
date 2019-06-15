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
		media: Joi.string()
	};

	public scrapeInfo = async (req: Request, res: Response) => {
		const params = await Joi.validate(req.query, this.scrapeInfoSchema);
		const result = await this.mediaScraper.scrapeInfo(params.searchTerm, params.fromPage, params.pages);
		res.status(200).send(result);
	};

	public scrapeLinks = async (req: Request, res: Response) => {
		const params = await Joi.validate(req.query, this.scrapeLinksSchema);
		const result = await this.mediaScraper.scrapeLinks(params.mediaRawName);
		res.status(200).send(result);
	};

	public download = async (req: Request, res: Response) => {
		const params = await Joi.validate(req.query, this.downloadSchema);
		const mediaFactory = Factories.getFactory<Media>(params.media.type);
		if (mediaFactory) {
			const media = JsonToTypedHelper.deserialize<Media>(params.media, mediaFactory);
			if (media) {
				await this.retrieveLinks(media);
				await this.downloadManager.download(media); // TODO update wishlists, add a file-cache service to manage list of strings
			}
			res.status(200).send(media && media.linksPackageAvailable);
		} else {
			throw new HTTP400Error(`Media '${params.media}' could not be deserialized`);
		}
	};

	private async retrieveLinks(media: Media) {
		const links = await this.mediaScraper.scrapeLinks(media.rawName);
		media.linksPackages = links;
	}
}
