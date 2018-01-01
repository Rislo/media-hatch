using System;
using Gtk;
using System.Collections.Generic;
using MediaHatchCore;
using MediaHatchUI;
using Gdk;

public partial class MainWindow : Gtk.Window
{
	public MainWindow(MainViewModel mainViewModel) : base(Gtk.WindowType.Toplevel)
	{
		Build();
        ModifyBg(StateType.Normal, new Gdk.Color(48, 89, 115));

		eventbox1.ModifyBg(StateType.Normal, new Gdk.Color(255, 255, 255));
		_mainViewModel = mainViewModel;
        
		buttonExit.Clicked += (sender, e) => Application.Quit();
	}

    public MediaView SelectedMediaView
	{
		get { return _selectedMediaView; }
		private set
		{
			if (_selectedMediaView != value)
			{
				if (_selectedMediaView != null)
					_selectedMediaView.State = StateType.Normal;
				_selectedMediaView = value;
				if (_selectedMediaView != null)
				{
					_selectedMediaView.State = StateType.Selected;
					MakeFullyVisible(_selectedMediaView);
				}
			}
		}
	}
	private MediaView _selectedMediaView;

	public void DisplayMedia()
	{
		int colNb = 3;
		HBox currentHBox = null;
		List<MediaView> currentRow = null;
		int availableMediaCount = _mainViewModel.AvailableMediaList.Count;
		for (int i = 0; i < availableMediaCount; i++)
        {
			Media media = _mainViewModel.AvailableMediaList[i];
			if (i % colNb == 0)
			{
				currentRow = new List<MediaView>();
				_mediaViewRows.Add(currentRow);
				currentHBox = new HBox(true, 5);
				currentHBox.Visible = true;
				vboxMedia.PackStart(currentHBox);
			}
            MediaView mv = new MediaView();
			mv.Load(media);
			currentHBox.PackStart(mv, true, true, 0);
			currentRow.Add(mv);
			_mediaViewToRow.Add(mv, currentRow);
        }
		if(availableMediaCount > 0)
			SelectedMediaView = _mediaViewRows[0][0];
	}

	protected override bool OnKeyPressEvent(Gdk.EventKey evnt)
	{
		if (SelectedMediaView != null)
		{
			MediaView triedSelectedMediaView = GetSelectedMediaView(SelectedMediaView, evnt.Key);
			if (triedSelectedMediaView != null)
				SelectedMediaView = triedSelectedMediaView;
			else if (evnt.Key == Gdk.Key.d)
				TryDownload(SelectedMediaView.Media);
		}
		return base.OnKeyPressEvent(evnt);
	}

	private async void TryDownload(Media media)
	{
		await _mainViewModel.ScrapeLinks(media);
		if (!media.LinksPackageAvailable)
		{
			MessageDialog md = new MessageDialog(this,
			DialogFlags.DestroyWithParent, MessageType.Warning,
			ButtonsType.None, "Links package not found");
			md.Run();
			md.Destroy();
		}
		else
			_mainViewModel.Download(media);
	}
		

    protected override bool OnDeleteEvent(Event evnt)
    {
        Application.Quit();
        return base.OnDeleteEvent(evnt);
    }

	private Dictionary<MediaView, List<MediaView>> _mediaViewToRow = new Dictionary<MediaView, List<MediaView>>();
	private List<List<MediaView>> _mediaViewRows = new List<List<MediaView>>();

	private MediaView GetSelectedMediaView(MediaView currentMediaView, Gdk.Key key)
	{
		List<MediaView> currentRow = _mediaViewToRow[currentMediaView];
		int currentMediaViewIndex = currentRow.IndexOf(currentMediaView);
		int currentRowIndex = _mediaViewRows.IndexOf(currentRow);
		switch (key)
		{
			case Gdk.Key.Left:
				if (currentMediaViewIndex > 0)
					return currentRow[currentMediaViewIndex - 1];
				break;
			case Gdk.Key.Right:
				if (currentMediaViewIndex < currentRow.Count - 1)
					return currentRow[currentMediaViewIndex + 1];
				break;
			case Gdk.Key.Up:
				if (currentRowIndex > 0)
					return _mediaViewRows[currentRowIndex - 1][currentMediaViewIndex];
				break;
			case Gdk.Key.Down:
				if (currentRowIndex < _mediaViewRows.Count - 1)
				{
					List<MediaView> nextRow = _mediaViewRows[currentRowIndex + 1];
					if (nextRow.Count - 1 >= currentMediaViewIndex)
						return nextRow[currentMediaViewIndex];
					else
						return nextRow[nextRow.Count - 1];
				}
				break;
			default:
				break;
		}
		return null;
	}

	private void MakeFullyVisible(MediaView mediaView)
	{
		int destX, destY;
		SelectedMediaView.TranslateCoordinates(scrolledwindow, 0, 0, out destX, out destY);
		Gdk.Rectangle selectedMediaViewSize = SelectedMediaView.Allocation;
		Gdk.Rectangle scrolledWindowSize = scrolledwindow.Allocation;
		if (destY < 0)
			scrolledwindow.Vadjustment.Value += destY;
		else
			scrolledwindow.Vadjustment.Value += destY + selectedMediaViewSize.Height - scrolledWindowSize.Height;
	}

	private MainViewModel _mainViewModel;
}
