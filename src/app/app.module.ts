import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module';
import { AppComponent } from './app.component';
import { SlideimagesComponent } from './slideimages/slideimages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollEventModule} from 'ngx-scroll-event';

@NgModule({
  declarations: [
    AppComponent,
    SlideimagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
