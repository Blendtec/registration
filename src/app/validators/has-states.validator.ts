import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { StateService } from '../services';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StatesValidator {

  public static createValidator(stateService: StateService): (control: AbstractControl) => Observable<{[key: string]: boolean}> {

    return (control: AbstractControl): Observable<{[key: string]: boolean}> => {
      const country = control.parent.get('country').value;
      return stateService
        .getAll$()
        .map(states => states.some(state => state.country === country) && !control.value ? {required: true} : null);
    }
      ;
  }
}
