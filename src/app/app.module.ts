import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';
import {
  CountryService, RegistrationService, RetailerService, SerialPrefixService, StateService, StoreService,
  WindowService
} from './services';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { MyDatePickerModule } from 'mydatepicker';
import { NgPipesModule } from 'ngx-pipes';
import { AppConfigModule } from './config';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CountrySelectComponent } from './directives/country-select/country-select.component';
import { AppConfig, APP_CONFIG } from './config';
import { SerialModalComponent } from './directives/serial-modal.component/serial-modal.component';

export function HttpLoaderFactory(http: HttpClient, config: AppConfig) {
  return new TranslateHttpLoader(http, `${config.assets}/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SuccessComponent,
    CountrySelectComponent,
    SerialModalComponent
  ],
  imports: [
    AppConfigModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    NgPipesModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, APP_CONFIG]
      }
    })
  ],
  providers: [StoreService,
    RegistrationService,
    WindowService,
    CountryService,
    RetailerService,
    FormBuilder,
    StateService,
    SerialPrefixService,
    TranslatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
