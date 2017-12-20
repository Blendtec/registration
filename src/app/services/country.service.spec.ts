import { TestBed, inject } from '@angular/core/testing';

import { CountryService } from './country.service';

describe('CountryService', () => {

  const countryService: CountryService = new CountryService();

  const testFieldsByCountry = [{ 'theCountry': 'US', 'language': 'en', 'first_name':
  { 'isRequired': true, 'isVisible': true, 'regex': '^.{1,50}$' }, 'last_name':
  { 'isRequired': true, 'isVisible': true }, 'street_address':
  { 'isRequired': false, 'isVisible': true }, 'apt_suite':
  { 'isRequired': false, 'isVisible': true }, 'city':
  { 'isRequired': false, 'isVisible': true }, 'state_province':
  { 'isRequired': false, 'isVisible': true }, 'zip':
  { 'isRequired': false, 'isVisible': true, 'regex': '[-_\\/0-9]{4,25}' }, 'country':
  { 'isRequired': false, 'isVisible': true }, 'email':
  { 'isRequired': false, 'isVisible': true, 'regex':
  '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
  },
  'phone_number': { 'isRequired': false, 'isVisible': false, 'regex': '^[^a-zA-Z]{7,25}$' },
  'purchase_month': { 'isRequired': false, 'isVisible': true },
  'purchase_day': { 'isRequired': false, 'isVisible': true },
  'purchase_year': { 'isRequired': false, 'isVisible': true },
  'purchase_place': { 'isRequired': false, 'isVisible': true },
  'specify_other': { 'isRequired': false, 'isVisible': false },
  'serial_prefix': { 'isRequired': false, 'isVisible': true, 'regex': '^[a-zA-Z0-9]{1,14}$' },
  'serial_suffix': { 'isRequired': false, 'isVisible': true, 'regex': '^[a-zA-Z0-9]{1,14}$' } }];

  const testCountries = [{ 'name': 'United States', 'code': 'US' }, { 'name': 'Canada', 'code': 'CA' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryService]
    });
    countryService.fieldsByCountry = testFieldsByCountry;
    countryService.countries = testCountries;
    countryService.currentCountry = testFieldsByCountry[0];
  });

  it('should be created', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));

  it('getCountryFromLanguage should set the country settings based off of the language', () => {
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('../settings/fieldsByCountry.json');
    } catch (e) {

    }
    let testLanguage = null;
    if (typeof fieldsByCountry[0] !== 'undefined' && typeof fieldsByCountry[0].language === 'string') {
      testLanguage = fieldsByCountry[0].language;
      countryService.getCountryFromLanguage(testLanguage);
    }

    expect(countryService.currentCountry).toBeDefined();
  });

  it('getCountryFromCountry should set the country settings based off of the country chosen', () => {
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('../settings/fieldsByCountry.json');
    } catch (e) {

    }
    let testCountry = null;
    if (typeof fieldsByCountry[0] !== 'undefined' && typeof fieldsByCountry[0].theCountry === 'string') {
      testCountry = fieldsByCountry[0].theCountry;
      countryService.getCountryFromLanguage(testCountry);
    }

    expect(countryService.currentCountry).toBeDefined();
  });

  it('isElementRequired should tell you whether or not an element is required', () => {

    let result = countryService.isElementRequired('first_name');
    expect(result).toBeTruthy();

    result = countryService.isElementRequired('apt_suite');
    expect(result).toBeFalsy();
  });

  it('isElementVisible should tell you whether or not an element is visible', () => {

    let result = countryService.isElementVisible('first_name');
    expect(result).toBeTruthy();

    result = countryService.isElementVisible('specify_other');
    expect(result).toBeFalsy();
  });

  it('isElementErrored should tell you whether or not an element is errored', () => {
    let result = countryService.isElementErrored('first_name', false);
    expect(result).toBeFalsy();

    result = countryService.isElementErrored('fake_element', false);
    expect(result).toBeFalsy();

    countryService.inputValueByName['first_name'] = '';
    result = countryService.isElementErrored('first_name', true);
    expect(result).toBeTruthy();

    countryService.inputValueByName['first_name'] = 'test';
    result = countryService.isElementErrored('first_name', true);
    expect(result).toBeFalsy();

  });

  it('isAnElementErrored should tell you whether or not one of the elements is errored', () => {
    let result = countryService.isAnElementErrored(['first_name', 'last_name'], false);
    expect(result).toBeFalsy();

    result = countryService.isAnElementErrored(['fake_element', 'another_fake_element'], false);
    expect(result).toBeFalsy();

    countryService.inputValueByName['first_name'] = '';
    result = countryService.isAnElementErrored(['first_name', 'last_name'], true);
    expect(result).toBeTruthy();

    countryService.inputValueByName['first_name'] = 'test';
    countryService.inputValueByName['last_name'] = 'test';
    result = countryService.isAnElementErrored(['first_name', 'last_name'], true);
    expect(result).toBeFalsy();

  });

  it('isOptionSelected should tell you whether or not the current country is the one selected', () => {
    let result = countryService.isOptionSelected('GE');
    expect(result).toBeFalsy();

    result = countryService.isOptionSelected('US');
    expect(result).toBeTruthy();
  });


  it('isAllInfoCorrect should tell you whether or not the fields are filled in correctly', () => {
    let result = countryService.isAllInfoCorrect(false);
    expect(result).toBeFalsy();

    countryService.inputValueByName['first_name'] = 'test';
    countryService.inputValueByName['last_name'] = 'test';

    result = countryService.isAllInfoCorrect(true);
    expect(result).toBeTruthy();
  });

});
