import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  submitData(submitUrl: string, data: any, callback = null) {
    return this.http.post(submitUrl, data, {responseType: 'text'})
      .toPromise()
      .then(response => {
        response = response;
        console.log(response);
        if (callback.constructor === Function) {
          callback();
        }

      })
      .catch(e => this.handleError(e));
  }

  httpGet(submitUrl: string, callback = null) {
    this.http.get(submitUrl).subscribe(data => {
      callback(data);
    });
  }

}
