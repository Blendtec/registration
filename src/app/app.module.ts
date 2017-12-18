import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { TranslateDirective } from './directives/translate.directive';
import { StoreService } from './services/store.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { APP_BASE_HREF } from '@angular/common';
import { RequestService } from './services/request.service';
import { WindowService } from './services/window.service';
import { CountryService } from './services/country.service';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TranslateDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [StoreService, RequestService, WindowService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
