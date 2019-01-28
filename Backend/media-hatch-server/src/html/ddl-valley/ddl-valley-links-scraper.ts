import { HtmlScrapedMediaInfo } from "../html-scraped-media-info";
import { LinksPackage } from "media-hatch-core";
import { HtmlMediaScraper } from "../html-media-scraper";
import * as cheerio from "cheerio";
import * as xregexp from "xregexp";

export class DdlValleyLinksScraper {
  private fileHostRegex = xregexp.build(
    "(http)(s)?://(?<fileHost>{{0}})/.*",
    ["[^/]*"],
    "i"
  );

  private linkDividedRegex = xregexp.build("(?<part>{{0}})", [".part\\d+."]);

  public scrape(
    scrapedMediaInfo: HtmlScrapedMediaInfo
  ): Promise<LinksPackage[]> {
    return HtmlMediaScraper.getHtmlDocument(scrapedMediaInfo.pageUrl).then(
      htmlDocument => {
        const linksNodes = htmlDocument
          .find(".post")
          .find(".cont")
          .find("a");
        const links = new Array<string>();
        for (let i = 0; i < linksNodes.length; i++) {
          const linkNode = linksNodes.eq(i);
          if (linkNode.attr("rel") === "nofollow") {
            links.push(linksNodes.eq(i).attr("href"));
          }
        }
        return this.retrieveLinksPackage(links);
        // TODO Gérer aussi le cas avec plusieurs épisodes d'une série (genre The Punisher S02) et gérer renommage de .mkv depuis script JD
      }
    );
  }

  private retrieveLinksPackage(links: string[]): LinksPackage[] {
    let fileHost: string;
    let lastFileHost: string;
    let collectedLinks = new Array<string>();
    const packages = new Map<string, LinksPackage>();
    for (const link of links) {
      const fileHostMatchArray = xregexp.exec(link, this.fileHostRegex);
      if (fileHostMatchArray) {
        fileHost = fileHostMatchArray["fileHost"];
        if (
          lastFileHost &&
          lastFileHost !== fileHost &&
          fileHost &&
          collectedLinks.length > 0
        ) {
          this.filterPackages(
            lastFileHost,
            new LinksPackage(lastFileHost, collectedLinks),
            packages
          );
          collectedLinks = new Array<string>();
        }
        collectedLinks.push(link);
        lastFileHost = fileHost;
      }
    }
    if (lastFileHost && collectedLinks.length > 0) {
      this.filterPackages(
        lastFileHost,
        new LinksPackage(lastFileHost, collectedLinks),
        packages
      );
    }
    return [...packages.values()];
  }

  private filterPackages(
    fileHost: string,
    newPackage: LinksPackage,
    packages: Map<string, LinksPackage>
  ) {
    if (packages.has(fileHost)) {
      const existingPackage = packages.get(fileHost);
      const existingDivided = xregexp.exec(
        existingPackage.links[0],
        this.linkDividedRegex
      );
      const newDivided = xregexp.exec(
        newPackage.links[0],
        this.linkDividedRegex
      );
      if (!existingDivided && newDivided) {
        packages.delete(fileHost);
        packages.set(fileHost, newPackage);
      }
    } else {
      packages.set(fileHost, newPackage);
    }
  }
}
