using MediaHatchCore;
using System;
using Gtk;
using System.IO;

namespace MediaHatchUI
{
	[System.ComponentModel.ToolboxItem(true)]
	public partial class MediaView : Gtk.Bin
	{
		public MediaView()
		{
            this.Build();
			eventbox2.ModifyBg(Gtk.StateType.Normal, new Gdk.Color(255, 255, 255));
			eventbox2.ModifyBg(Gtk.StateType.Selected, new Gdk.Color(11, 28, 38));

			textviewDescription.ModifyBase(Gtk.StateType.Selected, new Gdk.Color(11, 28, 38));


			_normalTextTag = new TextTag("normal");
			_normalTextTag.ForegroundGdk = new Gdk.Color(0, 0, 0);
			_selectedTextTag = new TextTag("selected");
			_selectedTextTag.ForegroundGdk = new Gdk.Color(255, 255, 255);
			textviewDescription.Buffer.TagTable.Add(_normalTextTag);
			textviewDescription.Buffer.TagTable.Add(_selectedTextTag);
		}

        public void Load(Media media)
        {
			Media = media;
            labelTitle.Text = media.Name;
			labelRawName.Text = $"({media.RawName})";
			textviewDescription.Buffer.Text =  media.Description;
			textviewDescription.Buffer.ApplyTag(_normalTextTag, textviewDescription.Buffer.GetIterAtOffset(0), 
			                                    textviewDescription.Buffer.GetIterAtOffset(textviewDescription.Buffer.Text.Length));
            if(media.Illustration != null)
            {
                try
                {
                    image.Pixbuf = new Gdk.Pixbuf(media.Illustration);
                }
                catch { }
            }
        }

		public Media Media { get; private set; }

		private TextTag _normalTextTag;
		private TextTag _selectedTextTag;

		protected override void OnStateChanged(Gtk.StateType previous_state)
		{
			base.OnStateChanged(previous_state);
			if (State == Gtk.StateType.Selected)
				textviewDescription.Buffer.ApplyTag(_selectedTextTag, textviewDescription.Buffer.GetIterAtOffset(0),
												textviewDescription.Buffer.GetIterAtOffset(textviewDescription.Buffer.Text.Length));
			else if (State == Gtk.StateType.Normal)
			{
				textviewDescription.Buffer.RemoveTag(_selectedTextTag, textviewDescription.Buffer.GetIterAtOffset(0),
												textviewDescription.Buffer.GetIterAtOffset(textviewDescription.Buffer.Text.Length));
				textviewDescription.Buffer.ApplyTag(_normalTextTag, textviewDescription.Buffer.GetIterAtOffset(0),
												textviewDescription.Buffer.GetIterAtOffset(textviewDescription.Buffer.Text.Length));
			}
		}
	}
}
