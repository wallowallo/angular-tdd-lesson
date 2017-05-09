import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner-inline.component';
import { ExternalBannerComponent } from './external-template-banner/external-banner.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { UserService } from './models/user.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ExternalBannerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
