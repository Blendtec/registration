import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';
import { StoreService } from './services/store.service';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { APP_BASE_HREF } from '@angular/common';
import { RegistrationService } from './services/registration.service';
import { WindowService } from './services/window.service';
import { CountryService } from './services/country.service';
import { RetailerService } from './services/retailer.service';
import { MyDatePickerModule } from 'mydatepicker';
import { StateService } from './services/state.service';
import { NgPipesModule } from 'ngx-pipes';
import { AppConfigModule } from './config';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CountrySelectComponent } from './directives/country-select/country-select.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SuccessComponent,
    CountrySelectComponent,
  ],
  imports: [
    AppConfigModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    NgHttpLoaderModule,
    NgPipesModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [StoreService, RegistrationService, WindowService, CountryService, RetailerService, FormBuilder, StateService, TranslatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
