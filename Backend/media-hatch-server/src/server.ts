import { Server, Types } from 'woopsa';
import { DdlValleyScraper } from './html/ddl-valley/ddl-valley-scraper';

const mediaScraper = new DdlValleyScraper();
const woopsaServer = new Server(mediaScraper, { port: 2000 });
const scrapeInfo = new Types.WoopsaMethodAsync(
	'scrapeInfoAsync',
	'Text',
	(searchTerm, fromPage, pages, done) => {
		mediaScraper.scrapeInfo(searchTerm, fromPage, pages).then(medias => {
			done(JSON.stringify(medias));
		});
	},
	[{ searchTerm: 'Text' }, { fromPage: 'Integer' }, { pages: 'Integer' }]
);
const scrapeLinks = new Types.WoopsaMethodAsync(
	'scrapeLinksAsync',
	'Text',
	(rawName, done) => {
		mediaScraper.scrapeLinks(rawName).then(linksPackages => {
			done(JSON.stringify(linksPackages));
		});
	},
	[{ mediaRawName: 'Text' }]
);
woopsaServer.element.addMethod(scrapeInfo);
woopsaServer.element.addMethod(scrapeLinks);
console.log('Running media-hatch-server on :2000/woopsa');
