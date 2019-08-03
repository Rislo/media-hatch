export abstract class WishListsManager {
  public abstract addToWishList(mediaName: string, type: new () => object);

  public abstract removeFromWishList(mediaName: string, type: new () => object);

  public abstract getWishList(type: new () => object): Promise<string[]>;
}
