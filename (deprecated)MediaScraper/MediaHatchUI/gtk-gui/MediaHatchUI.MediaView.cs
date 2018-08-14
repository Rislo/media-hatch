
// This file has been generated by the GUI designer. Do not modify.
namespace MediaHatchUI
{
	public partial class MediaView
	{
		private global::Gtk.EventBox eventbox2;

		private global::Gtk.VBox vbox1;

		private global::Gtk.Alignment alignment1;

		private global::Gtk.VBox vbox2;

		private global::Gtk.Label labelTitle;

		private global::Gtk.Label labelRawName;

		private global::Gtk.Image image;

		private global::Gtk.TextView textviewDescription;

		protected virtual void Build()
		{
			global::Stetic.Gui.Initialize(this);
			// Widget MediaHatchUI.MediaView
			global::Stetic.BinContainer.Attach(this);
			this.CanFocus = true;
			this.Name = "MediaHatchUI.MediaView";
			// Container child MediaHatchUI.MediaView.Gtk.Container+ContainerChild
			this.eventbox2 = new global::Gtk.EventBox();
			this.eventbox2.Name = "eventbox2";
			// Container child eventbox2.Gtk.Container+ContainerChild
			this.vbox1 = new global::Gtk.VBox();
			this.vbox1.Name = "vbox1";
			this.vbox1.Spacing = 6;
			// Container child vbox1.Gtk.Box+BoxChild
			this.alignment1 = new global::Gtk.Alignment(0.5F, 0.5F, 1F, 1F);
			this.alignment1.Name = "alignment1";
			this.alignment1.TopPadding = ((uint)(5));
			// Container child alignment1.Gtk.Container+ContainerChild
			this.vbox2 = new global::Gtk.VBox();
			this.vbox2.Name = "vbox2";
			this.vbox2.Spacing = 6;
			// Container child vbox2.Gtk.Box+BoxChild
			this.labelTitle = new global::Gtk.Label();
			this.labelTitle.Name = "labelTitle";
			this.labelTitle.LabelProp = global::Mono.Unix.Catalog.GetString("label3");
			this.vbox2.Add(this.labelTitle);
			global::Gtk.Box.BoxChild w1 = ((global::Gtk.Box.BoxChild)(this.vbox2[this.labelTitle]));
			w1.Position = 0;
			w1.Expand = false;
			w1.Fill = false;
			// Container child vbox2.Gtk.Box+BoxChild
			this.labelRawName = new global::Gtk.Label();
			this.labelRawName.Name = "labelRawName";
			this.labelRawName.LabelProp = global::Mono.Unix.Catalog.GetString("label1");
			this.vbox2.Add(this.labelRawName);
			global::Gtk.Box.BoxChild w2 = ((global::Gtk.Box.BoxChild)(this.vbox2[this.labelRawName]));
			w2.PackType = ((global::Gtk.PackType)(1));
			w2.Position = 1;
			w2.Expand = false;
			w2.Fill = false;
			this.alignment1.Add(this.vbox2);
			this.vbox1.Add(this.alignment1);
			global::Gtk.Box.BoxChild w4 = ((global::Gtk.Box.BoxChild)(this.vbox1[this.alignment1]));
			w4.Position = 0;
			w4.Expand = false;
			w4.Fill = false;
			// Container child vbox1.Gtk.Box+BoxChild
			this.image = new global::Gtk.Image();
			this.image.Name = "image";
			this.image.Yalign = 0F;
			this.vbox1.Add(this.image);
			global::Gtk.Box.BoxChild w5 = ((global::Gtk.Box.BoxChild)(this.vbox1[this.image]));
			w5.Position = 1;
			w5.Expand = false;
			w5.Fill = false;
			// Container child vbox1.Gtk.Box+BoxChild
			this.textviewDescription = new global::Gtk.TextView();
			this.textviewDescription.Name = "textviewDescription";
			this.textviewDescription.Editable = false;
			this.textviewDescription.CursorVisible = false;
			this.textviewDescription.AcceptsTab = false;
			this.textviewDescription.Justification = ((global::Gtk.Justification)(2));
			this.textviewDescription.WrapMode = ((global::Gtk.WrapMode)(2));
			this.vbox1.Add(this.textviewDescription);
			global::Gtk.Box.BoxChild w6 = ((global::Gtk.Box.BoxChild)(this.vbox1[this.textviewDescription]));
			w6.Position = 2;
			this.eventbox2.Add(this.vbox1);
			this.Add(this.eventbox2);
			if ((this.Child != null))
			{
				this.Child.ShowAll();
			}
			this.Show();
		}
	}
}