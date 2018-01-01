using HtmlAgilityPack;
using MediaHatchCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MediaScraperHtml
{
	public class ThreeMbLinksScraper
	{
		public async Task ScrapeAsync(Media media, string mediaPageUrl)
		{
			HtmlNode contentNode = ThreeMbMediaScraper.GetContentNode(await ThreeMbMediaScraper.GetHtmlDocumentAsync(mediaPageUrl));
			if (contentNode != null)
			{
				HtmlNode entryNode = contentNode.ChildNodes.First(c => c.Name == "div")?.ChildNodes.First(c => c.Name == "div" && c.GetAttributeValue("class", string.Empty) == "entry");
				if (entryNode != null)
				{
					HtmlNode linksNode = entryNode.ChildNodes.First(c => c.Name == "p" && CultureInfo.InvariantCulture.CompareInfo.IndexOf(c.InnerText, "click here to get links", CompareOptions.IgnoreCase) >= 0);
					if (linksNode != null)
					{
						string linksPageUrl = linksNode.ChildNodes.First(c => c.Name == "a")?.GetAttributeValue("href", null);
						if (!string.IsNullOrEmpty(linksPageUrl))
						{
							HtmlDocument linksPageDocument = await GetLinksPageHtmlAsync(linksPageUrl);
							HtmlNode linksTableNode = linksPageDocument.DocumentNode.ChildNodes.First(c => c.Name == "html")?.ChildNodes.First(c => c.Name == "body")?.ChildNodes
														.First(c => c.Name == "div" && c.Id == "page")?.ChildNodes.First(c => c.Name == "center")?.ChildNodes
														.First(c => c.Name == "div")?.ChildNodes.First(c => c.Name == "div")?.ChildNodes.First(c => c.Name == "p")?.ChildNodes
														.First(c => c.Name == "center")?.ChildNodes.First(c => c.Name == "table")?.ChildNodes.First(c => c.Name == "tbody");
							List<HtmlNode> linksPackagesNodes = new List<HtmlNode>(linksTableNode.ChildNodes.Where(c => c.Name == "tr"));

							// remove first and last links packages nodes (Direct download & Single links)
							linksPackagesNodes.RemoveAt(0);
							linksPackagesNodes.RemoveAt(linksPackagesNodes.Count - 1);

							media.LinksPackages = RetrieveLinksPackages(linksPackagesNodes);
						}
					}
				}
			}
		}

		private async Task<HtmlDocument> GetLinksPageHtmlAsync(string linksPageUrl)
		{
			ASCIIEncoding encoding = new ASCIIEncoding();
			string postData = "post_password=300mbfilms&Submit=Submit";
			byte[] data = encoding.GetBytes(postData);

			HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://earn-money-onlines.info/wp-login.php?action=postpass");
			request.CookieContainer = new CookieContainer();
			request.Method = "POST";
			request.ContentType = "application/x-www-form-urlencoded";
			using (Stream newStream = await request.GetRequestStreamAsync())
				newStream.Write(data, 0, data.Length);

			WebResponse response = await request.GetResponseAsync();
			response.Dispose();

			CookieCollection cookies = request.CookieContainer.GetCookies(new Uri("http://earn-money-onlines.info"));

			Cookie authenticationCookie = null;
			int cookieIndex = 0;
			foreach (Cookie cookie in cookies)
			{
				if (cookieIndex == 1)
				{
					authenticationCookie = cookie;
					break;
				}
				cookieIndex++;
			}

            HttpWebRequest linksRequest = HttpWebRequest.CreateHttp(linksPageUrl);
            linksRequest.CookieContainer = request.CookieContainer;
            response = await linksRequest.GetResponseAsync();
            String responseString = string.Empty;
            using (Stream s = response.GetResponseStream())
            {
                StreamReader reader = new StreamReader(s, Encoding.UTF8);
                responseString = reader.ReadToEnd();
            }
            return ThreeMbMediaScraper.GetHtmlDocument(responseString);
		}

		private List<LinksPackage> RetrieveLinksPackages(List<HtmlNode> linksPackagesNodes)
		{
			List<LinksPackage> linksPackages = new List<LinksPackage>();
			foreach (HtmlNode node in linksPackagesNodes)
			{
				LinksPackage newLinksPackage = RetrieveLinksPackage(node);
				if (newLinksPackage != null)
					linksPackages.Add(newLinksPackage);
			}
			return linksPackages;
		}

		private LinksPackage RetrieveLinksPackage(HtmlNode linksPackageNode)
		{
			List<HtmlNode> linksNodes = new List<HtmlNode>(linksPackageNode.ChildNodes.Where(c => c.Name == "td"));
			// Remove description node
			linksNodes.RemoveAt(0);

			List<string> links = new List<string>();
			string fileHost = null;
			foreach (HtmlNode linkNode in linksNodes)
			{
				string newLink = RetrieveLink(linkNode, out fileHost);
				if (!string.IsNullOrEmpty(newLink))
					links.Add(newLink);
			}
			if (links.Count > 0 && !string.IsNullOrEmpty(fileHost))
				return new LinksPackage(fileHost, links);
			else
				return null;
		}

		private string RetrieveLink(HtmlNode linkNode, out string fileHost)
		{
			fileHost = null;
			string originalLink = linkNode.ChildNodes.First(c => c.Name == "a")?.GetAttributeValue("href", null);
			if (originalLink != null)
			{
				Match linkMatch = _linkRegex.Match(originalLink);
				if (linkMatch.Success)
				{
					string link = linkMatch.Groups[_linkGroupName].Value;
					fileHost = linkMatch.Groups[_fileHostGroupName].Value;
					if (!string.IsNullOrEmpty(link))
						return link;
				}
			}
			return originalLink;
		}

		private const string _linkGroupName = "link";
		private const string _fileHostGroupName = "filehost";

		private static Regex _linkRegex = new Regex($"(http:\\/\\/linkshrink.net.*)*(?<{_linkGroupName}>(http)(s)?:\\/\\/(?<{_fileHostGroupName}>[^\\/]*)\\/.*)", RegexOptions.IgnoreCase | RegexOptions.Compiled);
	}
}