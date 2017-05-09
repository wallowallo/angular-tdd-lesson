import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner-inline.component';
import { ExternalBannerComponent } from './external-template-banner/external-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ExternalBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
