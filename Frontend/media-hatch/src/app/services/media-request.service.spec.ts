/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediaRequestService } from './media-request.service';

describe('Service: MediaRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaRequestService]
    });
  });

  it('should ...', inject([MediaRequestService], (service: MediaRequestService) => {
    expect(service).toBeTruthy();
  }));
});
