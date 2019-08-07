/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediaWishListsService } from './media-wish-lists.service';

describe('Service: MediaWishLists', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaWishListsService]
    });
  });

  it('should ...', inject([MediaWishListsService], (service: MediaWishListsService) => {
    expect(service).toBeTruthy();
  }));
});
