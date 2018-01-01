import { AppIconComponent } from './utils/app-icon/app-icon.component';
import { LoadingSpinnerComponent } from './utils/loading-spinner/loading-spinner.component';
import { StartupService, startupServiceFactory } from './services/startup.service';
import { MediaDownloadService } from './services/media-download.service';
import { MediaContainerComponent } from './media-container/media-container.component';
import { MediaInfoService } from './services/media-info.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconRegistry, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule];

const routes: Routes = [{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent }];

@NgModule({
  declarations: [AppComponent, DashboardComponent, MediaContainerComponent, LoadingSpinnerComponent, AppIconComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MATERIAL_MODULES,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MatIconRegistry,
    MediaInfoService,
    MediaDownloadService,
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
