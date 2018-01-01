using System;
using MediaHatchCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MediaHatchUI
{
	public class MainViewModel
	{
		public MainViewModel(MediaScraper mediaScraper, DownloadManager dlManager)
		{
			_dlManager = dlManager;
			_mediaScraper = mediaScraper;
			AvailableMediaList = new List<Media>(_mediaScraper.ScrapedMedia);
		}

		public async Task ScrapeLinks(Media media)
		{
			await _mediaScraper.ScrapeLinksAsync(media);
		}

		public void Download(Media media)
		{
			_dlManager.Download(media);	
		}

		public List<Media> AvailableMediaList { get; private set; }

		private MediaScraper _mediaScraper;
		private DownloadManager _dlManager;
	}
}
