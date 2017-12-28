import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../config';
import { IRetailer } from '../models/retailer.interface';

@Injectable()
export class RetailerService {

  private _resource = 'retailers.json';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  public getAll$(): Observable<IRetailer[]> {
    return this.http.get<IRetailer[]>(`${this.config.s3}/${this._resource}`);
  }
}
