import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../config';

@Injectable()
export class SerialPrefixService {

  private _resource = 'products/prefixes.json';
  private _cache: string[];

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  public getAll$(): Observable<string[]> {
    if (this._cache) {
      return Observable.of(this._cache);
    } else {
      return this.http.get<string[]>(`${this.config.apiHost}/api/${this._resource}`)
        .do(vals => this._cache = vals);
    }
  }
}
