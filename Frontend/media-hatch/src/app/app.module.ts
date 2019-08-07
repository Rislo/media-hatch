import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconRegistry, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './utils/loading-spinner/loading-spinner.component';
import { AppIconComponent } from './utils/app-icon/app-icon.component';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { environment } from 'src/environments/environment';
import { ConceptModule } from 'concept';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaContainerComponent } from './media-container/media-container.component';
import { MediaInfoService } from './services/media-info.service';
import { Factories } from 'media-hatch-core';

const routes: Routes = [{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent }];

@NgModule({
  declarations: [AppComponent, LoadingSpinnerComponent, AppIconComponent, MediaContainerComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ConceptModule,
    RouterModule.forRoot(routes),
    InterceptorsModule.forRoot({
      serverUrl: environment.server,
      apiExtensionUrl: environment.apiExtensionUrl,
      retries: 3
    })
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mediaInfoService: MediaInfoService) {
    Factories.initialize();
    mediaInfoService.fetch();
  }
}
