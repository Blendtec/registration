import { Injectable } from '@angular/core';

declare function require(url: string);

@Injectable()
export class CountryService {


  private _fieldsByCountry: Object[];
  private _countries: Object[];
  private _states: Object[];
  private _currentCountry: Object;
  private _inputValueByName: Object;

constructor() {
    const self = this;
    try {
        self._fieldsByCountry = require('../settings/fieldsByCountry.json');
        self._countries = require('../settings/countries.json');
        self._states = require('../settings/states.json');
    } catch (e) {
      console.log(e);
    }
}

  get countries(): Object[] {
    return this._countries;
  }

  get states(): Object[] {
    return this._states;
  }

  getCountryFromLanguage(language: string): void {
    const self = this;
    if (this._fieldsByCountry) {
      for (let i = 0; i < this._fieldsByCountry.length; i++) {
        if (typeof this._fieldsByCountry[i] === 'object' &&
          typeof this._fieldsByCountry[i]['language'] === 'string' &&
          this._fieldsByCountry[i]['language'] === language) {
          self._inputValueByName['country'] = this._fieldsByCountry[i]['theCountry'];
          self._currentCountry = this._fieldsByCountry[i];
          return;
        }
      }
      self._currentCountry = this._fieldsByCountry[0];
    }
  }

  getCountryFromCountry(country: string): void {
    const self = this;
    for (let i = 0; i < this._fieldsByCountry.length; i++) {
      if (typeof this._fieldsByCountry[i] === 'object' &&
        typeof this._fieldsByCountry[i]['theCountry'] === 'string' &&
        this._fieldsByCountry[i]['theCountry'] === country) {
        self._currentCountry = this._fieldsByCountry[i];
        return;
      }
    }
    self._currentCountry = this._fieldsByCountry[0];
  }

}
