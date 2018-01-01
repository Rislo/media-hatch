using HtmlAgilityPack;
using MediaHatchCore;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MediaScraperHtml
{
	public class ThreeMbMediaNodeScraper
	{
		private const string _titleGroupName = "title";
		private const string _episodeGroupName = "episode";
		private const string _seasonGroupName = "season";

		private static Regex _tvShowRegex = new Regex($"(?<{_titleGroupName}>.*) *(s(?<{_seasonGroupName}>[\\d]+) *(!<{_episodeGroupName}>e(?:[\\d]+)+)) *({_existingQualitiesRegex})*", RegexOptions.Compiled | RegexOptions.IgnoreCase);

		private static readonly List<string> _existingQualities = new List<string> { "720p", "1080p", "hdrip", "dvdrip", "brrip", "hdtv", "web-dl", "hdcam" };
		private static readonly string _existingQualitiesRegex = string.Join("|", _existingQualities);

		public string LastNodeMediaPageLink { get; private set; }

		public async Task<Media> ScrapeAsync(HtmlNode node)
		{
			Media scrapedMedia = null;
			HtmlNode titleNode = node.ChildNodes.FirstOrDefault(c => c.Name == "h2");
			if (titleNode != null)
			{
				string rawMediaName = titleNode.InnerText;
				Match match = _tvShowRegex.Match(rawMediaName);
				if (match.Success)
				{
					TvShowEpisode scrappedTvShow = new TvShowEpisode();
					scrappedTvShow.Name = match.Groups[_titleGroupName].Value.Trim();
					scrappedTvShow.SeasonNb = int.Parse(match.Groups[_seasonGroupName].Value);
					string episodesMatch = match.Groups[_episodeGroupName].Value.ToLowerInvariant();
					string[] episodesNumbers = episodesMatch.Split(new string[] { "e" }, StringSplitOptions.RemoveEmptyEntries);
					scrappedTvShow.EpisodeNb = new int[episodesNumbers.Length];
					for (int i = 0; i < episodesNumbers.Length; i++)
						scrappedTvShow.EpisodeNb[i] = int.Parse(episodesNumbers[i]);
					scrapedMedia = scrappedTvShow;
				}
				else
				{
					scrapedMedia = new Movie();
					List<string> mediaQualities = new List<string>();
					int firstQualityIndex = rawMediaName.Length;
					foreach (string existingQuality in _existingQualities)
					{
						int qualityIndex = CultureInfo.InvariantCulture.CompareInfo.IndexOf(rawMediaName, existingQuality, CompareOptions.IgnoreCase);
						if (qualityIndex >= 0 && qualityIndex < firstQualityIndex)
							firstQualityIndex = qualityIndex;
					}
					scrapedMedia.Name = rawMediaName.Substring(0, firstQualityIndex).Trim();
				}

				if (scrapedMedia != null)
				{
					scrapedMedia.RawName = rawMediaName;
					LastNodeMediaPageLink = titleNode.ChildNodes.FirstOrDefault(c => c.Name == "a")?.GetAttributeValue("href", string.Empty);
					HtmlNode entryNode = node.ChildNodes.FirstOrDefault(c => c.Name == "div" && c.GetAttributeValue("class", string.Empty) == "entry");
					if (entryNode != null)
					{
						string imgLink = entryNode.ChildNodes.FirstOrDefault(c => c.Name == "p")?.ChildNodes.First(c => c.Name == "img")?.GetAttributeValue("src", null);
                        if (imgLink != null)
                            try
                            {
                                using (HttpClient client = new HttpClient())
                                    scrapedMedia.Illustration = await client.GetByteArrayAsync(imgLink);
                            }
                            catch { }

						List<HtmlNode> pNodes = entryNode.ChildNodes.Where(c => c.Name == "p")?.ToList();
						if (pNodes.Count > 2)
							scrapedMedia.Description = pNodes[2].InnerText;
					}
				}
			}
			return scrapedMedia;
		}
	}
}
