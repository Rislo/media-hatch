using MediaScraperHtml;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MediaScraperConsole
{
	class Program
	{
		static void Main(string[] args)
		{
			ThreeMbMediaScraper ms = new ThreeMbMediaScraper();
			ms.ScrapeInfoAsync().Wait();
			ms.ScrapeLinksAsync(ms.ScrapedMedia.First()).Wait();
			Console.ReadKey();
		}
	}
}