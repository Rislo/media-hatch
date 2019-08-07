import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InjectionToken, Inject, Optional } from '@angular/core';
import { environment } from 'src/environments/environment';

export let SERVER_URL = new InjectionToken<string>('Base SERVER URL');
export let API_EXTENSION_URL = new InjectionToken<string>('Extensions API URL of SERVER URL');
export let RETRIES = new InjectionToken<number>('Retries');

export class ApiInterceptor implements HttpInterceptor {
  constructor(@Inject(SERVER_URL) private baseUrl: string, @Optional() @Inject(API_EXTENSION_URL) private apiExtensionUrl: string = '') {
    if (window.location.hostname) {
      this.baseUrl = `http://${window.location.hostname}:${environment.port}`;
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiRequest;
    if (request.url.startsWith(this.apiExtensionUrl)) {
      apiRequest = request.clone({
        url: `${this.baseUrl}/${request.url}`
      });
    } else {
      apiRequest = request;
    }
    return next.handle(apiRequest);
  }
}
