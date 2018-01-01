using MediaHatchCore;
using MediaScraperHtml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MediaScraperServices
{
	class Program
	{
		static void Main(string[] args)
		{
			int maxPageNbToScrap = 10;
			string customRoute = string.Empty;
			if (args.Length > 0)
			{
				int.TryParse(args[0], out maxPageNbToScrap);
				if (args.Length > 1)
					customRoute = args[1];
				if (args.Length > 2)
					_tvShowsWishListFilePath = args[2];
			}
			_mediaScraper = new ThreeMbMediaScraper(maxPageNbToScrap, customRoute);
			_downloadManager = new DownloadManagerWatchFolder();
			_refreshTimer = new Timer(s => LookForNewMediaAsync(s), null, TimeSpan.Zero, TimeSpan.FromMinutes(30));
		}

		private async static void LookForNewMediaAsync(object state)
		{
			string[] tvShowsToLookFor = File.ReadAllText(_tvShowsWishListFilePath).Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
			await _mediaScraper.ScrapeInfoAsync();
			List<Media> episodesFound = new List<Media>(_mediaScraper.ScrapedMedia.OfType<TvShowEpisode>().Where(e => tvShowsToLookFor.Contains(e.Name, StringComparer.OrdinalIgnoreCase)));
			Parallel.ForEach(episodesFound, e => _mediaScraper.ScrapeLinksAsync(e).Wait());
			_downloadManager.Download(episodesFound);
		}

		private static Timer _refreshTimer;
		private static ThreeMbMediaScraper _mediaScraper;
		private static DownloadManagerWatchFolder _downloadManager;
		private static string _tvShowsWishListFilePath = "TvShows.wishlist";
	}
}