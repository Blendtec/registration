import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { RegistrationCommand } from '../models';
import { APP_CONFIG, AppConfig } from '../config';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  public post(command: RegistrationCommand): Promise<any> {
    return this.http.post(`${this.config.apiHost}/${this.config.registrationEndpoint}`, command, {responseType: 'text'}).toPromise();
  }
}
