import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { StartupService } from './services/startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';

  public content: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private startupService: StartupService) {
    iconRegistry.addSvgIcon('schedule', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/schedule.svg'));
    iconRegistry.addSvgIcon('download', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/download.svg'));
    iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
    iconRegistry.addSvgIcon('cancel', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cancel.svg'));
  }

  ngOnInit() {
    if (!this.startupService.loaded) {
      // TODO navigate to error url
    }
  }
}
