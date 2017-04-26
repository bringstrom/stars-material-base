﻿import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {GitHubService} from './git-hub.service';
import {ResultsListComponent} from './results-list/results-list.component';
import {MomentModule} from 'angular2-moment';
import {Convert2KPipe} from './convert2k/convert2k.pipe';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import 'hammerjs';
import 'moment';

@NgModule({
  declarations: [
    AppComponent,
    ResultsListComponent,
    Convert2KPipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MomentModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
