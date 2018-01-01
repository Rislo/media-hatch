import { Observable } from 'rxjs/Observable';
import { MediaInfoService } from './../services/media-info.service';
import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Media } from 'media-hatch-core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private didScroll = false;
  private lastScrollTop = 0;
  private readonly delta = 5;
  private readonly navbarHeight = 54;

  @ViewChild('main') private mainEl: ElementRef;

  public headerUp = false;

  public allMedia: Observable<Media[]>;

  get searchTerm$() {
    return this.mediaInfoService.searchTerm$;
  }

  get fetching() {
    return this.mediaInfoService.fetching;
  }

  constructor(private mediaInfoService: MediaInfoService) {}

  ngOnInit() {
    this.allMedia = this.mediaInfoService.lastMediaInfoFetched;
    setInterval(() => {
      if (this.didScroll) {
        this.hasScrolled();
        this.didScroll = false;
      }
    }, 250);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.didScroll = true;
  }

  hasScrolled() {
    const st = window.pageYOffset;

    // Make sure they scroll more than delta
    if (Math.abs(this.lastScrollTop - st) <= this.delta) {
      return;
    }

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > this.lastScrollTop && st > this.navbarHeight) {
      // Scroll Down
      this.headerUp = true;
    } else {
      // Scroll Up
      if (st + window.innerHeight < this.mainEl.nativeElement.offsetHeight) {
        this.headerUp = false;
      }
    }

    this.lastScrollTop = st;
  }

  clearSearch() {
    this.searchTerm$.next('');
  }
}
