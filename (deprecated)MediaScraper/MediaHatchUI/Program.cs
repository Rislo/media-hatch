using System;
using Gtk;
using MediaScraperHtml;
using System.Collections.Generic;
using MediaHatchCore;

namespace MediaHatchUI
{
	public class MainClass
	{
		public static void Main(string[] args)
		{
            Application.Init();
			int maxPageNbToScrap = 10;
			string customRoute = string.Empty;
			if (args.Length > 0)
			{
				int.TryParse(args[0], out maxPageNbToScrap);
				if (args.Length > 1)
					customRoute = args[1];
			}
			ThreeMbMediaScraper ms = new ThreeMbMediaScraper(maxPageNbToScrap, customRoute); // ?s=scorpion
			ms.ScrapeInfoAsync().Wait();
			MainWindow win = new MainWindow(new MainViewModel(ms, new DownloadManagerWatchFolder()));
            win.HeightRequest = win.Screen.Height;
            win.WidthRequest = win.Screen.Width;

			win.DisplayMedia();
			win.Show();
			Application.Run();
        }
	}
}
