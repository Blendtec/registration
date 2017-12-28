import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  apiHost: string;
  registrationEndpoint: string;
  captchaKey: string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiHost: environment.apiHost,
  registrationEndpoint: environment.registrationEndpoint,
  captchaKey: environment.captchaKey,
};

@NgModule({
  providers: [
    {provide: APP_CONFIG, useValue: APP_DI_CONFIG}
    ]
})
export class AppConfigModule { }
