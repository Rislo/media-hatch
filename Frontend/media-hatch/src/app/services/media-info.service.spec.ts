/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediaInfoService } from './media-info.service';

describe('Service: MediaInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaInfoService]
    });
  });

  it('should ...', inject([MediaInfoService], (service: MediaInfoService) => {
    expect(service).toBeTruthy();
  }));
});
