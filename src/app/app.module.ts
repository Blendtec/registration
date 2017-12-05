import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { TranslateDirective } from './translate.directive';
import { StoreService } from './store.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { APP_BASE_HREF } from '@angular/common';
import { RequestService } from './request.service';



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
  providers: [StoreService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
