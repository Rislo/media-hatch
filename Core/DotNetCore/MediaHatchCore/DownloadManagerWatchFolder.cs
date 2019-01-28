using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace MediaHatchCore
{
	public class DownloadManagerWatchFolder : DownloadManager
	{
		private const string _defaultOptionsFile = "dlmanager.options";
		private const string _defaultLinksFileExtension = ".crawljob";
		private const string _linksFileAddedFolderName = "added";

		private const string _mediaTypeWatchFolderSeparator = ";";

		public DownloadManagerWatchFolder()
		{
			string[] options = File.ReadAllLines(_defaultOptionsFile);
			foreach (string option in options)
			{
				if (option.Contains(_mediaTypeWatchFolderSeparator))
				{
					string[] mediaTypeFolderPaths = option.Split(new string[] { _mediaTypeWatchFolderSeparator }, StringSplitOptions.RemoveEmptyEntries);
					if (mediaTypeFolderPaths.Length > 0)
					{
						Type t = Type.GetType(mediaTypeFolderPaths[0]);
						if (t != null)
						{
							_mediaTypeToWatchFolderPath.Add(t, mediaTypeFolderPaths.Length > 1 ? mediaTypeFolderPaths[1] : string.Empty);
							_mediaTypeToDownloadFolderPath.Add(t, mediaTypeFolderPaths.Length > 2 ? mediaTypeFolderPaths[2] : string.Empty);
						}
					}
				}
				else if (option == "downloadFolderPerTvShow")
					_downloadFolderPerTvShow = true;
				else
					_orderedFavoriteFileHosts.Add(option);
			}
		}

		public void Download(List<Media> media)
		{
			foreach (Media currentMedia in media)
				Download(currentMedia);
		}

		public override void Download(Media media)
		{
			if (media.LinksPackageAvailable)
				InternalDownload(media);
		}

		public List<string> GetProcessedMediaSupportedFullNames()
		{
			List<string> processedMediaFullNames = new List<string>();
			foreach (string folder in _mediaTypeToWatchFolderPath.Values)
			{
				processedMediaFullNames.AddRange(Directory.EnumerateFiles(folder, $"*{_defaultLinksFileExtension}").Select(s => Path.GetFileNameWithoutExtension(s)));
				processedMediaFullNames.AddRange(Directory.EnumerateFiles(Path.Combine(folder, _linksFileAddedFolderName), $"*{_defaultLinksFileExtension}").Select(s => Path.GetFileNameWithoutExtension(s)));
			}
			return new List<string>(processedMediaFullNames.Distinct());
		}

		private void InternalDownload(Media media)
		{
			string watchFolderPath;
			if (_mediaTypeToWatchFolderPath.TryGetValue(media.GetType(), out watchFolderPath))
			{
                if (Directory.Exists(watchFolderPath))
                {
                    string filePathSupportedMediaFullName = media.FilePathSupportedFullName();
                    string filePath = Path.Combine(watchFolderPath, $"{filePathSupportedMediaFullName}{_defaultLinksFileExtension}");
                    string addedFilePath = Path.Combine(watchFolderPath, _linksFileAddedFolderName, $"{filePathSupportedMediaFullName}{_defaultLinksFileExtension}");
                    if (!File.Exists(addedFilePath))
                    {
                        string crawlJobContent = $"autoStart=TRUE\nautoConfirm=TRUE\ntext={media.GetFirstFavoriteLinksPackage(_orderedFavoriteFileHosts).ConcatenatedLinks}\npackageName={filePathSupportedMediaFullName}\ncomment={filePathSupportedMediaFullName}";
                        string downloadFolderPath;
                        if (_mediaTypeToDownloadFolderPath.TryGetValue(media.GetType(), out downloadFolderPath))
                        {
                            if (_downloadFolderPerTvShow && media is TvShowEpisode)
                                downloadFolderPath = Path.Combine(downloadFolderPath, media.FilePathSupportedName());
                            crawlJobContent += $"\ndownloadFolder={downloadFolderPath}";
                        }
                        File.WriteAllText(filePath, crawlJobContent);
                    }
                }
			}
		}

		private List<string> _orderedFavoriteFileHosts = new List<string>();
		private Dictionary<Type, string> _mediaTypeToWatchFolderPath = new Dictionary<Type, string>();
		private Dictionary<Type, string> _mediaTypeToDownloadFolderPath = new Dictionary<Type, string>();
		private bool _downloadFolderPerTvShow;
	}
}
