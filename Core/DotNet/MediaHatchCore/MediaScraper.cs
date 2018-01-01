using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MediaHatchCore
{
	public abstract class MediaScraper
	{
		public abstract Task ScrapeInfoAsync();

		public IEnumerable<Media> ScrapedMedia
		{
			get { return _ScrapedMedia; }
		}
		protected List<Media> _ScrapedMedia = new List<Media>();

		public abstract Task ScrapeLinksAsync(Media media);
	}
}
