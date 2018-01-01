import { ThreeMbScrapedMediaInfo } from "./three-mb-scraped-media-info";
import * as cheerio from "cheerio";
import * as xregexp from "xregexp";
import { isUndefined, isNull } from "util";
import { Movie, TvShowEpisode, Media } from "media-hatch-core";

export class ThreeMbPostScraper {
  private tvShowsRegex = xregexp.build(
    "(?<title>{{0}}).*s(?<season>{{1}})(?<episodes>.*e(?:{{2}})+)",
    [".*", "[0-9]+", "[0-9]+"],
    "i"
  );

  private movieTitleYearRegex = xregexp.build(
    "(?<title>{{0}}).*\\((?<year>{{1}})\\)",
    [".*", "[0-9]{4}"],
    "i"
  );

  private fileSizeRegex = xregexp.build(
    "(?<size>{{0}})",
    ["[0-9\\.]+(mb|gb)"],
    "i"
  );

  private tagPrefix = "tag-";
  private savedTags = [
    "1080p",
    "720p",
    "hdrip",
    "dvdrip",
    "brip",
    "hdtv",
    "web-dl",
    "hdcam"
  ];
  private titleSuffixes = [
    "720p",
    "1080p",
    "hdrip",
    "dvdrip",
    "brrip",
    "hdtv",
    "web-dl",
    "hdcam",
    "hqmic",
    "nitro",
    "dvdscr",
    "limited",
    "ppv"
  ];

  private readonly notFoundTitle = "Error 404 - Not Found";

  public Scrape(htmlPost: Cheerio): ThreeMbScrapedMediaInfo {
    let media: Media = undefined;
    const classes = htmlPost.attr("class").split(" ");
    const categories = classes.filter(value => value.startsWith("category"));
    const rawTags = classes.filter(value => value.startsWith("tag"));
    const titleDiv = htmlPost.find(".title");
    const pDivs = htmlPost
      .find(".entry")
      .find("p")
      .filter((i, el) => !el.attribs["style"]);
    let description;
    pDivs.each((i, el) =>
      el.children.forEach(value => {
        if (value.type === "text" && isNull(value.next)) {
          description = value.nodeValue;
        }
      })
    );
    const imgUrl = pDivs.children("img").attr("src");
    const pageUrl = titleDiv.children("a").attr("href");
    const rawTitle = titleDiv.text();
    if (rawTitle === this.notFoundTitle) {
      return undefined;
    }
    const tvShowMatchArray = xregexp.exec(rawTitle, this.tvShowsRegex);
    const fileSizeMatchArray = xregexp.exec(rawTitle, this.fileSizeRegex);
    if (tvShowMatchArray && tvShowMatchArray.length == 4) {
      let tvShow = new TvShowEpisode();
      tvShow.name = tvShowMatchArray[1].trim();
      tvShow.seasonNb = +tvShowMatchArray[2];
      const episodesMatch = tvShowMatchArray[3]
        .substr(tvShowMatchArray[3].toLowerCase().indexOf("e"))
        .toLowerCase();
      const episodesNumbers = episodesMatch.split("e");
      for (let i = 0; i < episodesNumbers.length; i++) {
        if (episodesNumbers[i]) {
          tvShow.episodeNb.push(+episodesNumbers[i]);
        }
      }
      media = tvShow;
    } else {
      let movie = new Movie();
      const movieTitleYearMatchArray = xregexp.exec(
        rawTitle,
        this.movieTitleYearRegex
      );
      if (movieTitleYearMatchArray && movieTitleYearMatchArray.length == 3) {
        movie.name = movieTitleYearMatchArray[1].trim();
        movie.releaseYear = +movieTitleYearMatchArray[2];
      } else {
        let firstSuffixIndex = rawTitle.length - 1;
        for (let suffix of this.titleSuffixes) {
          let suffixIndex = rawTitle.toLowerCase().indexOf(suffix);
          if (suffixIndex >= 0 && suffixIndex < firstSuffixIndex)
            firstSuffixIndex = suffixIndex;
        }
        movie.name = rawTitle.substr(0, firstSuffixIndex).trim();
      }
      media = movie;
    }
    if (media) {
      media.rawName = rawTitle;
      if (fileSizeMatchArray && fileSizeMatchArray.length > 0) {
        media.size = fileSizeMatchArray[0];
      }
      media.description = description;
      media.illustrationUrl = imgUrl;
      for (const tag of rawTags) {
        const extractedTag = tag.replace(this.tagPrefix, "");
        if (this.savedTags.indexOf(extractedTag) >= 0) {
          media.tags.push(extractedTag);
        }
      }
      const quality720pIndex = media.tags.indexOf("720p");
      if (quality720pIndex >= 0 && media.tags.indexOf("1080p") >= 0) {
        media.tags.splice(quality720pIndex, 1);
      }
    }
    return new ThreeMbScrapedMediaInfo(media, pageUrl);
  }
}
