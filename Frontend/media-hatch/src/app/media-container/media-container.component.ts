import { MediaDownloadService } from './../services/media-download.service';
import { Media, Movie } from 'media-hatch-core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.scss']
})
export class MediaContainerComponent implements OnInit {
  @Input() public media: Media;

  public processed = false;
  public processing = false;
  public inWishList = false;
  public addingToWishList = false;

  constructor(private downloadService: MediaDownloadService) {}

  ngOnInit() {
    this.updateStates();
  }

  download() {
    this.processing = true;
    this.downloadService
      .download(this.media)
      .then(downloaded => {
        this.updateStates();
        this.processing = false;
      })
      .catch(error => (this.processing = false));
  }

  addToWishList() {
    this.addingToWishList = true;
    this.downloadService
      .addToWishList(this.media)
      .then(added => {
        this.updateStates();
        this.addingToWishList = false;
      })
      .catch(error => (this.addingToWishList = false));
  }

  private updateStates() {
    this.processed = this.downloadService.isProcessed(this.media);
    if (this.media instanceof Movie && this.processed) {
      this.inWishList = true;
    } else {
      this.inWishList = this.downloadService.isInWishList(this.media);
    }
  }
}
