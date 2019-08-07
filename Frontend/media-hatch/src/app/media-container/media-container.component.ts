import { Media } from 'media-hatch-core';
import { Component, OnInit, Input } from '@angular/core';
import { MediaRequestService } from '../services/media-request.service';
import { MediaWishListsService } from '../services/media-wish-lists.service';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.scss']
})
export class MediaContainerComponent implements OnInit {
  @Input() public media: Media;

  public requesting = false;
  public inWishList = false;
  public addingToWishList = false;

  constructor(private requestService: MediaRequestService, private wishListsService: MediaWishListsService) {}

  ngOnInit() {
    this.updateIsInWishList();
  }

  request() {
    this.requesting = true;
    this.requestService
      .request(this.media)
      .then(requested => {
        this.updateIsInWishList();
        this.media.requested = requested;
        this.requesting = false;
      })
      .catch(error => (this.requesting = false));
  }

  async addToWishList() {
    this.addingToWishList = true;
    try {
      const added = await this.wishListsService.addToWishList(this.media);
      this.inWishList = added;
    } catch {
    } finally {
      this.addingToWishList = false;
    }
  }

  private async updateIsInWishList() {
    this.inWishList = await this.wishListsService.isInWishList(this.media);
  }
}
