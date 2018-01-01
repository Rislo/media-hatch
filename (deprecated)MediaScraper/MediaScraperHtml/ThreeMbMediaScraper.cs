using HtmlAgilityPack;
using MediaHatchCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MediaScraperHtml
{
    public class ThreeMbMediaScraper : MediaScraper
    {
        #region Static

		public static HtmlNode GetContentNode(HtmlDocument htmlDocument)
		{
			return htmlDocument.DocumentNode.ChildNodes.First(c => c.Name == "html")?.ChildNodes.First(c => c.Name == "body")?.ChildNodes.First(c => c.Id == "wrapper")?.ChildNodes.First(c => c.Id == "content");
		}

		public async static Task<HtmlDocument> GetHtmlDocumentAsync(string url)
		{
			using (HttpClient client = new HttpClient())
				return await GetHtmlDocumentAsync(client, url);
		}

		public async static Task<HtmlDocument> GetHtmlDocumentAsync(HttpClient httpClient, string url)
		{
            string content = await httpClient.GetStringAsync(url);
            return GetHtmlDocument(content);
		}

        public static HtmlDocument GetHtmlDocument(string htmlContent)
        {
            HtmlDocument htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(htmlContent);
            return htmlDocument;
        }
        
        #endregion

        public ThreeMbMediaScraper(int maxPageNbToScrap = 10, string customRoute = "")
        {
            _customRoute = customRoute;
			MaxPageNbScrap = maxPageNbToScrap;
        }

        public int MaxPageNbScrap { get; private set; }

		public async override Task ScrapeInfoAsync()
		{
			while (_currentPage < MaxPageNbScrap)
			{
				HtmlDocument htmlPage = await GetHtmlDocumentAsync(GetNextPageUrl());
				HtmlNode contentNode = GetContentNode(htmlPage);
				if (contentNode != null)
				{
					List<HtmlNode> entriesNodes = new List<HtmlNode>(contentNode.ChildNodes.Where(c => c.Name == "div" && c.Id != "wp_page_numbers"));
					ThreeMbMediaNodeScraper nodeScrapper = new ThreeMbMediaNodeScraper();
					foreach (HtmlNode node in entriesNodes)
					{
						Media lastMedia = await nodeScrapper.ScrapeAsync(node);
						if (lastMedia != null)
							_ScrapedMedia.Add(lastMedia);
						if (!string.IsNullOrEmpty(nodeScrapper.LastNodeMediaPageLink))
							_mediaToPageUrl.Add(lastMedia, nodeScrapper.LastNodeMediaPageLink);
					}
				}
			}
		}

		public async override Task ScrapeLinksAsync(Media media)
		{
			string mediaPageUrl;
			if (_mediaToPageUrl.TryGetValue(media, out mediaPageUrl))
				await _linksScraper.ScrapeAsync(media, mediaPageUrl);
		}

        private ThreeMbLinksScraper _linksScraper = new ThreeMbLinksScraper();

        private string GetNextPageUrl()
        {
            _currentPage++;
            if (_currentPage == 1)
                return $"{_baseUrl}/{_customRoute}";
            else
                return $"{_baseUrl}/page/{_currentPage}{_customRoute}";
        }

        private int _currentPage = 0;

        private const string _baseUrl = "https://www.300mbfilms.co";

        private string _customRoute;

        private Dictionary<Media, string> _mediaToPageUrl = new Dictionary<Media, string>();
    }
}
