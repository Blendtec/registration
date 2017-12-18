import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  private handleError(error: any, errorCallback = null): Promise<any> {
    console.error('An error occurred', error);
    errorCallback(error);
    return Promise.reject(error.message || error);
  }

  submitData(submitUrl: string, data: any, callback = null, errorCallback = null) {
    return this.http.post(submitUrl, data, {responseType: 'text'})
      .toPromise()
      .then(response => {
        response = response;
        if (callback.constructor === Function && response === 'success') {
          callback();
        } else if (errorCallback.constructor === Function && response !== 'success') {
          errorCallback(response);
        }

      })
      .catch(e => this.handleError(e, errorCallback));
  }

  httpGet(submitUrl: string, callback = null) {
    this.http.get(submitUrl).subscribe(data => {
      callback(data);
    });
  }

}
