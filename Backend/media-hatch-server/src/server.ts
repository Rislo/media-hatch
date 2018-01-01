import { Server, Types } from "woopsa";
import { ThreeMbMediaScraper } from "./html/three-mb-media-scraper";

const mediaScraper = new ThreeMbMediaScraper();
const woopsaServer = new Server(mediaScraper, { port: 2000 });
const scrapeInfo = new Types.WoopsaMethodAsync(
  "scrapeInfoAsync",
  "Text",
  (searchTerm, done) => {
    mediaScraper.scrapeInfo(searchTerm).then(medias => {
      done(JSON.stringify(medias));
    });
  },
  [{ searchTerm: "Text" }]
);
const scrapeLinks = new Types.WoopsaMethodAsync(
  "scrapeLinksAsync",
  "Text",
  (rawName, done) => {
    mediaScraper.scrapeLinks(rawName).then(linksPackages => {
      done(JSON.stringify(linksPackages));
    });
  },
  [{ mediaRawName: "Text" }]
);
woopsaServer.element.addMethod(scrapeInfo);
woopsaServer.element.addMethod(scrapeLinks);
console.log("Running media-hatch-server on :2000/woopsa");
