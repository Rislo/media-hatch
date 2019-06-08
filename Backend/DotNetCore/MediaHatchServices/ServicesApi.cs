using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediaHatchCore;
using Newtonsoft.Json;
using Woopsa;

namespace MediaHatchServices
{
    [WoopsaVisibility(WoopsaVisibility.DefaultIsVisible)]
	public class ServicesApi
	{
		private const string _mediaWishListSeparator = ";";

		public ServicesApi()
		{
			_downloadManager = new DownloadManagerWatchFolder();

            _client = new WoopsaDynamicClient("http://127.0.0.1:2000/woopsa");
            
            _refreshTimer = new Timer(s => LookForNewMedia(s), null, TimeSpan.Zero, TimeSpan.FromMinutes(30));
		}

		public bool Download(string media)
		{
			Media mediaToDownload = CoreBaseElementFromJson<Media>(media);
			if (mediaToDownload != null)
			{
				RetrieveLinks(mediaToDownload);
				Download(mediaToDownload);
			}
			return mediaToDownload != null && mediaToDownload.LinksPackageAvailable;
		}

        public void AddMovieToWishList(string name)
        {
            AddToWishList(_moviesWishListFilePath, name);
        }

        public void AddTvShowToWishList(string name)
        {
            AddToWishList(_tvShowsWishListFilePath, name);
        }

        public string MoviesWishList
		{
			get
			{
				return JsonConvert.SerializeObject(RetrieveWishList(_moviesWishListFilePath));
			}
		}

		public string TvShowsWishList
		{
			get
			{
				return JsonConvert.SerializeObject(RetrieveWishList(_tvShowsWishListFilePath));
			}
		}

		public string GetAlreadyProcessedMediaRawNames(string scrapedMediaList)
		{
			List<string> alreadyProcessedMediaNames = new List<string>();
			Media[] mediaList = CoreBaseElementFromJson<Media[]>(scrapedMediaList);
            lock (_processedNamesLock)
            {
                RefreshInternalProcessedMediaSupportedFullNames();
                foreach (Media media in mediaList)
                    if (_processedMediaSupportedFullNames.Contains(media.FilePathSupportedFullName()))
                        alreadyProcessedMediaNames.Add(media.RawName);
            }
			return JsonConvert.SerializeObject(alreadyProcessedMediaNames);
		}

		private void LookForNewMedia(object state)
		{
            try
            {
                string[] moviesToLookFor = RetrieveWishList(_moviesWishListFilePath);
                string[] tvShowsToLookFor = RetrieveWishList(_tvShowsWishListFilePath);
                Media[] scrapedMedia = CoreBaseElementFromJson<Media[]>(_client.scrapeInfoAsync(string.Empty, 1, 2));
                List<Media> mediaToDownload = new List<Media>(scrapedMedia.Where(e => (e is TvShowEpisode && tvShowsToLookFor.Contains(e.Name, StringComparer.OrdinalIgnoreCase)) ||
                                                                                 (e is Movie && moviesToLookFor.Contains(e.Name, StringComparer.OrdinalIgnoreCase) && IsEligibleMovieToDownload((Movie)e))));
                Parallel.ForEach(mediaToDownload, e => RetrieveLinks(e));
                Download(mediaToDownload);
            }
            catch (Exception e) { Console.WriteLine($"Unexpected error occured => {e.GetFullMessage()}"); }
		}

		private void RetrieveLinks(Media media)
		{
            WoopsaValue woopsaReturn = _client.scrapeLinksAsync(media.RawName);
			media.LinksPackages = new List<LinksPackage>(JsonConvert.DeserializeObject<LinksPackage[]>(woopsaReturn.AsText));
		}

		private string[] RetrieveWishList(string filePath, bool noLock = false)
		{
			if (File.Exists(filePath))
			{
                if (noLock)
                    return File.ReadAllText(filePath).Split(new string[] { _mediaWishListSeparator }, StringSplitOptions.RemoveEmptyEntries).Select(s => s.Trim()).ToArray();
				else
					lock (_wishListsLock)
						return File.ReadAllText(filePath).Split(new string[] { _mediaWishListSeparator }, StringSplitOptions.RemoveEmptyEntries).Select(s => s.Trim()).ToArray();
			}
			return new string[0];
		}

		private void AddToWishList(string filePath, string mediaName)
		{
			lock (_wishListsLock)
				File.AppendAllText(filePath, $"{mediaName}{_mediaWishListSeparator}");
		}

		private void UnsafeUpdateWishList(string filePath, List<string> wishList)
		{
			File.WriteAllText(filePath, string.Join(_mediaWishListSeparator, wishList) + _mediaWishListSeparator);
		}

		private void Download(Media media, bool updateWishList = false)
		{
			_downloadManager.Download(media);
            lock (_processedNamesLock)
            {
                RefreshInternalProcessedMediaSupportedFullNames();
                if (updateWishList && media is Movie && IsMediaAlreadyProcessed(media))
                {
                    lock (_wishListsLock)
                    {
                        List<string> moviesWishList = new List<string>(RetrieveWishList(_moviesWishListFilePath, true));
                        if (moviesWishList.Remove(media.Name))
                            UnsafeUpdateWishList(_moviesWishListFilePath, moviesWishList);
                    }
                }
            }
		}

		private void Download(List<Media> media)
		{
			lock(_wishListsLock)
			{
				string[] originalWishList = RetrieveWishList(_moviesWishListFilePath, true);
				List<string> moviesWishList = new List<string>(originalWishList);
				foreach (Media currentMedia in media)
				{
					Download(currentMedia);
					moviesWishList.Remove(currentMedia.Name);
				}
				if (originalWishList.Length > moviesWishList.Count)
					UnsafeUpdateWishList(_moviesWishListFilePath, moviesWishList);
			}
		}

		private bool IsMediaAlreadyProcessed(Media media)
		{
			if (_processedMediaSupportedFullNames == null)
				RefreshInternalProcessedMediaSupportedFullNames();
			return _processedMediaSupportedFullNames.Contains(media.FilePathSupportedFullName());
		}

        private void RefreshInternalProcessedMediaSupportedFullNames()
        {
            _processedMediaSupportedFullNames = _downloadManager.GetProcessedMediaSupportedFullNames();
        }

		private bool IsEligibleMovieToDownload(Movie movie)
		{
			return movie.Tags.Intersect(_eligibleMovieTags, StringComparer.OrdinalIgnoreCase).Count() == _eligibleMovieTags.Length;
		}

		private static T CoreBaseElementFromJson<T>(string json)
		{
			return JsonConvert.DeserializeObject<T>(json, new CoreBaseElementConverter());
		}

		private object _wishListsLock = new object();
		private object _processedNamesLock = new object();
		private string[] _eligibleMovieTags = new string[] { "bdrip" };
		private Timer _refreshTimer;
		private DownloadManagerWatchFolder _downloadManager;
		private string _tvShowsWishListFilePath = "TvShows.wishlist";
		private string _moviesWishListFilePath = "Movies.wishlist";
		private List<string> _processedMediaSupportedFullNames;
        private dynamic _client;
	}
}
