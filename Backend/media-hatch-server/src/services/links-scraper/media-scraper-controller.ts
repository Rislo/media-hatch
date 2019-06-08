import { DdlValleyScraper } from './html/ddl-valley/ddl-valley-scraper';
import { Request, Response } from 'express';
import * as Joi from '@hapi/joi';

export class MediaScraperController {
	private mediaScraper = new DdlValleyScraper();

	private scrapeInfoSchema = {
		searchTerm: Joi.string().optional(),
		fromPage: Joi.number(),
		pages: Joi.number()
	};

	private scrapeLinksSchema = {
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
		res.status(200).send(result);
	};
}
