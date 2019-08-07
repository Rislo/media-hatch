import { Injectable } from '@angular/core';
import { HttpJsonToObjectService, ConsoleLoggerService } from 'concept';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Media } from 'media-hatch-core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaRequestService extends HttpJsonToObjectService {
  constructor(http: HttpClient, logger: ConsoleLoggerService) {
    super(http, logger, `${environment.apiExtensionUrl}`);
  }

  public request(media: Media): Promise<boolean> {
    return this.post('/request', { mediaRawName: media.rawName })
      .pipe(
        map(value => {
          if (value === true) {
            media.requested = true;
            return true;
          }
          return false;
        })
      )
      .toPromise();
  }
}
