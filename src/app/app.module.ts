import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { TranslateDirective } from './directives/translate.directive';
import { StoreService } from './services/store.service';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { APP_BASE_HREF } from '@angular/common';
import { RegistrationService } from './services/registration.service';
import { WindowService } from './services/window.service';
import { CountryService } from './services/country.service';
import { RetailerService } from './services/retailer.service';
import { MyDatePickerModule } from 'mydatepicker';
import { StateService } from './services/state.service';
import { NgPipesModule } from 'ngx-pipes';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TranslateDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    NgHttpLoaderModule,
    NgPipesModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [StoreService, RegistrationService, WindowService, CountryService, RetailerService, FormBuilder, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
