import { Server, Types, Exceptions } from 'woopsa';
import { DdlValleyScraper } from './html/ddl-valley/ddl-valley-scraper';

const mediaScraper = new DdlValleyScraper();
const woopsaServer = new Server(mediaScraper, { port: 2000 });
const scrapeInfo = new Types.WoopsaMethodAsync(
	'scrapeInfoAsync',
	'Text',
	async (searchTerm, fromPage, pages, done) => {
		try {
			const medias = await mediaScraper.scrapeInfo(searchTerm, fromPage, pages);
			done(JSON.stringify(medias));
		} catch (e) {
			console.error(e);
			done(null, new Exceptions.WoopsaException(e.message));
		}
	},
	[{ searchTerm: 'Text' }, { fromPage: 'Integer' }, { pages: 'Integer' }]
);
const scrapeLinks = new Types.WoopsaMethodAsync(
	'scrapeLinksAsync',
	'Text',
	async (rawName, done) => {
		try {
			const linksPackages = await mediaScraper.scrapeLinks(rawName);
			done(JSON.stringify(linksPackages));
		} catch (e) {
			console.error(e);
			done(null, new Exceptions.WoopsaException(e.message));
		}
	},
	[{ mediaRawName: 'Text' }]
);
woopsaServer.element.addMethod(scrapeInfo);
woopsaServer.element.addMethod(scrapeLinks);
console.log('Running media-hatch-server on :2000/woopsa');
