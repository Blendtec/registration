import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SerialPrefixService } from '../services/serial-prefix.service';

@Injectable()
export class SerialPrefixValidator {

  /* tslint:disable */
  public static createValidator(serialPrefixService: SerialPrefixService): (control: AbstractControl) => Observable<{ [key: string]: boolean }> {
    /* tslint:disable */
    return (control: AbstractControl): Observable<{ [key: string]: boolean }> => serialPrefixService
      .getAll$()
      .map(prefixes => prefixes.some(p => p['prefix'] === control.value.toUpperCase()) ? null : {required: true});
  }
}
