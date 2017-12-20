import { Injectable } from '@angular/core';

declare function require(url: string);

@Injectable()
export class CountryService {

  private _fieldsByCountry: Object[];
  private _countries: Object[];
  private _states: Object[];
  private _currentCountry: Object; // these are the settings contained in the fieldsByCountry, not necessarily the selected country
  public inputValueByName: Object;
  public currentYear: number;
  private _stateList: Object[];
  private _defaultCountry = 'US';

constructor() {
    const self = this;
    try {
        self._fieldsByCountry = require('../settings/fieldsByCountry.json');
        self._countries = require('../settings/countries.json');
        self._states = require('../settings/states.json');
        self.resetValues();
    } catch (e) {
      console.log(e);
    }
}

  get countries(): Object[] {
    return this._countries;
  }

  set countries(input: Object[]) {
    this._countries = input;
  }

  get states(): Object[] {
    return this._states;
  }

  set states(input: Object[]) {
    this._states = input;
  }

  get currentCountry(): Object {
    return this._currentCountry;
  }

  set currentCountry(input: Object) {
    this._currentCountry = input;
  }

  get stateList(): Object[] {
    return this._stateList;
  }

  set fieldsByCountry(input: Object[]) {
    this._fieldsByCountry = input;
  }

  get fieldsByCountry(): Object[] {
    return this._fieldsByCountry;
  }



  cloneObject(toClone: Object): Object {
    const output = {};
    for (const i in toClone) {
      if (typeof toClone[i] !== 'undefined') {
        if (typeof toClone[i] === 'object' && toClone[i] !== null) {
          output[i] = this.cloneObject(toClone[i]);
        } else {
          output[i] = toClone[i];
        }
      }
    }
    return output;
  }

  setUpStatesBasedOnCountry(): void {
    let currCountry = this._defaultCountry;
    if (this.inputValueByName && this.inputValueByName['country']) {
      currCountry = this.inputValueByName['country'];
    }

    this._stateList = [];
    if (this._states && this._states.constructor === Array) {
      for (let i = 0; i < this._states.length; i++) {
        if (this._states[i] && this._states[i]['country'] && this._states[i]['country'] === currCountry) {
          this._stateList.push(this._states[i]);
        }
      }
    }

    if (this._stateList.length === 0) {
      this._currentCountry['state_province']['isRequired'] = false;
      this._currentCountry['state_province']['isVisible'] = false;
    }
  }

  getCountryFromLanguage(language: string): void {
    const self = this;
    if (this._fieldsByCountry) {
      for (let i = 0; i < this._fieldsByCountry.length; i++) {
        if (typeof this._fieldsByCountry[i] === 'object' &&
          typeof this._fieldsByCountry[i]['language'] === 'string' &&
          this._fieldsByCountry[i]['language'] === language) {
          self.inputValueByName['country'] = this._fieldsByCountry[i]['theCountry'];
          self._currentCountry = this.cloneObject(this._fieldsByCountry[i]);
          return;
        }
      }
      self._currentCountry = this.cloneObject(this._fieldsByCountry[0]);
    }
  }

  getCountryFromCountry(country: string): void {
    const self = this;
    for (let i = 0; i < this._fieldsByCountry.length; i++) {
      if (typeof this._fieldsByCountry[i] === 'object' &&
        typeof this._fieldsByCountry[i]['theCountry'] === 'string' &&
        this._fieldsByCountry[i]['theCountry'] === country) {
        self._currentCountry = this.cloneObject(this._fieldsByCountry[i]);
        return;
      }
    }
    self._currentCountry = this.cloneObject(this._fieldsByCountry[0]);
  }

  isElementRequired(elementName: string): boolean {
    if (typeof this.currentCountry === 'object'
      && typeof this.currentCountry[elementName] === 'object'
      && typeof this.currentCountry[elementName]['isRequired'] === 'boolean'
      && typeof this.currentCountry[elementName]['isVisible'] === 'boolean'
      && this.currentCountry[elementName]['isVisible']) {
      return this.currentCountry[elementName]['isRequired'];
    } else {
      return false;
    }
  }

  isElementVisible(elementName: string): boolean {
    if (typeof this.currentCountry === 'object'
      && typeof this.currentCountry[elementName] === 'object'
      && typeof this.currentCountry[elementName]['isVisible'] === 'boolean') {
      return this.currentCountry[elementName]['isVisible'];
    } else {
      return true;
    }
  }

  isElementErrored(elementName: string, submitInfo: boolean): boolean {
    if (submitInfo) {
      if (this.isElementRequired(elementName)) {
        if (typeof this.inputValueByName[elementName] !== 'string') {
          return true;
        } else if (this.inputValueByName[elementName].length === 0) {
          return true;
        } else if (typeof this.currentCountry[elementName]['regex'] === 'string') {
          return !this.inputValueByName[elementName].match(new RegExp(this.currentCountry[elementName]['regex']));
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isAnElementErrored(elementNames: string[], submitInfo: boolean): boolean {
    for (let i = 0; i < elementNames.length; i++) {
      if (this.isElementErrored(elementNames[i], submitInfo)) {
        return true;
      }
    }
    return false;
  }

  isOptionSelected(country: string): boolean {
    if (typeof this.currentCountry !== 'undefined' &&
      typeof this.currentCountry['theCountry'] === 'string') {
      return Boolean(this.currentCountry['theCountry'] === country);
    } else {
      return false;
    }

  }

  isAllInfoCorrect(submitInfo: boolean): boolean {
    const self = this;
    if (!submitInfo) {
      return false;
    }
    console.log(this.inputValueByName);
    for (const field in this.currentCountry) {
      if (typeof this.currentCountry[field] === 'object' &&
        typeof this.currentCountry[field]['isRequired'] === 'boolean') {
        const out = self.isElementErrored(field, submitInfo);
        if (out) {
          console.log(field);
          return false;
        }
      }
    }
    return true;
  }

  resetValues(): void {
    this.currentYear = (new Date()).getFullYear();
    this.inputValueByName = {};
    this.inputValueByName['purchase_month'] = '01';
    this.inputValueByName['purchase_year'] = String(this.currentYear);
    this.inputValueByName['purchase_day'] = '1';
    this.inputValueByName['purchase_place'] = 'Amazon';
    this.setUpStatesBasedOnCountry();
  }

}
