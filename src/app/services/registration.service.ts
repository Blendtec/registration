import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { RegistrationCommand } from '../models';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public post(url: string, command: RegistrationCommand): Promise<any> {
    console.log('POSTING TO API', JSON.stringify(command));
    return Promise.resolve();
    //return this.http.post(url, command, {responseType: 'text'}).toPromise();
  }
}
