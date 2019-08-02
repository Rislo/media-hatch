import { Media } from 'media-hatch-core';

export abstract class WishListsManager {
  public abstract addToWishList(media: Media);

  public abstract removeFromWishList(media: Media);
}
