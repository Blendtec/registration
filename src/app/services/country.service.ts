import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICountry } from '../models/country.interface';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../config';

@Injectable()
export class CountryService {

  private _resource = 'countries.json';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  public getAll$(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${this.config.s3}/${this._resource}`);
  }
}
