import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConfig } from './models/app-config.interface';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');


export const APP_DI_CONFIG: AppConfig = {
  apiHost: environment.apiHost,
  registrationEndpoint: environment.registrationEndpoint,
  captchaKey: environment.captchaKey,
  s3: environment.s3,
  bucket: environment.bucket
};

@NgModule({
  providers: [
    {provide: APP_CONFIG, useValue: APP_DI_CONFIG}
    ]
})
export class AppConfigModule { }
