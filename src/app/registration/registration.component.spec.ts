import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ElementRef, ChangeDetectorRef } from '@angular/core';

import { RegistrationComponent } from './registration.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { StoreService } from '../store.service';
import { RequestService } from '../request.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs/observable/of';


declare function require(url: string);

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let storeService : StoreService;
  let storeServiceFixture: ComponentFixture<StoreService>;
  let el : ElementRef;
  let cdRef : ChangeDetectorRef;
  let route : ActivatedRoute;

  let testFieldsByCountry = [{"theCountry":"US","language":"en","first_name":{"isRequired":true,"isVisible":true,"regex":"^.{1,50}$"},"last_name":{"isRequired":true,"isVisible":true},"street_address":{"isRequired":false,"isVisible":true},"apt_suite":{"isRequired":false,"isVisible":true},"city":{"isRequired":false,"isVisible":true},"state_province":{"isRequired":false,"isVisible":true},"zip":{"isRequired":false,"isVisible":true,"regex":"[-_\\/0-9]{4,25}"},"country":{"isRequired":false,"isVisible":true},"email":{"isRequired":false,"isVisible":true,"regex":"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"},"phone_number":{"isRequired":false,"isVisible":false,"regex":"^[^a-zA-Z]{7,25}$"},"purchase_month":{"isRequired":false,"isVisible":true},"purchase_day":{"isRequired":false,"isVisible":true},"purchase_year":{"isRequired":false,"isVisible":true},"purchase_place":{"isRequired":false,"isVisible":true},"specify_other":{"isRequired":false,"isVisible":false},"serial_prefix":{"isRequired":false,"isVisible":true,"regex":"^[a-zA-Z0-9]{1,14}$"},"serial_suffix":{"isRequired":false,"isVisible":true,"regex":"^[a-zA-Z0-9]{1,14}$"}}];

  let testCountries = [{"name": "United States", "code": "US"},{"name": "Canada", "code": "CA"}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports:[RouterModule.forRoot([]), FormsModule, RecaptchaModule.forRoot(), HttpClientModule, BrowserAnimationsModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/'},
      StoreService, RequestService]
    })
    .compileComponents();

  }));

  beforeEach( () => {

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.fieldsByCountry = testFieldsByCountry;
    component.countries = testCountries;
    component.currentCountry = testFieldsByCountry[0];

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it("expect setLanguage to set the local language", () => {
    let response = null;

    component.setLanguage('de');

    expect(component.language).toBe('de');
  });

  it("expects a file named fieldsByCountry.json to be within the same directory", () => {
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('./fieldsByCountry.json');
    } catch (e) {

    }
    expect(fieldsByCountry).not.toBeNull();
  });

  it("expects a file named countries.json to be within the same directory", () => {
    let countries = null;
    try {
      countries = require('./countries.json');
    } catch (e) {

    }
    expect(countries).not.toBeNull();
  });

  it("expects a file named states.json to be within the same directory", () => {
    let states = null;
    try {
      states = require('./states.json');
    } catch (e) {

    }
    expect(states).not.toBeNull();
  });

  it("fieldsByCountry.json file should be an array of objects where the objects have at least the properties 'theCountry' and 'language' defined and of type string", () => {
    let response = null;
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('./fieldsByCountry.json');
    } catch (e) {

    }

    if (typeof fieldsByCountry === 'object' && fieldsByCountry.constructor === Array) {
      for (let i = 0; i < fieldsByCountry.length; i++) {
        if (typeof fieldsByCountry[i].language != 'string' || typeof fieldsByCountry[i].theCountry != 'string') {
          response = 'invalid';
        }
      }
    } else {
      response = 'invalid';
    }

    expect(response).toBeNull();
  });

  it("states.json file should be an array of objects where the objects have at least the properties 'name' and 'code' defined and of type string", () => {
    let response = null;
    let fieldsByState = null;
    try {
      fieldsByState = require('./states.json');
    } catch (e) {

    }

    if (typeof fieldsByState === 'object' && fieldsByState.constructor === Array) {
      for (let i = 0; i < fieldsByState.length; i++) {
        if (typeof fieldsByState[i].name != 'string' || typeof fieldsByState[i].code != 'string') {
          response = 'invalid';
        }
      }
    } else {
      response = 'invalid';
    }

    expect(response).toBeNull();
  });

  it("countries.json file should be an array of objects where the objects have at least the properties 'name' and 'code' defined and of type string", () => {
    let response = null;
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('./states.json');
    } catch (e) {

    }

    if (typeof fieldsByCountry === 'object' && fieldsByCountry.constructor === Array) {
      for (let i = 0; i < fieldsByCountry.length; i++) {
        if (typeof fieldsByCountry[i].name != 'string' || typeof fieldsByCountry[i].code != 'string') {
          response = 'invalid';
        }
      }
    } else {
      response = 'invalid';
    }

    expect(response).toBeNull();
  });

  it("expect getLanguage to return observable which contains the language set by setLanguage", () => {
    let response = null;
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('./fieldsByCountry.json');
    } catch (e) {

    }
    component.getLanguage().subscribe(out => response = out);
    let testLanguage = null;
    if (typeof fieldsByCountry[0] != 'undefined' && typeof fieldsByCountry[0].language === 'string') {
      testLanguage = fieldsByCountry[0].language;
      component.setLanguage(testLanguage);
    }

    expect(response).toBe(testLanguage);
  });

  it("getCountryFromLanguage should set the country settings based off of the language", () => {
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('./fieldsByCountry.json');
    } catch (e) {

    }
    let testLanguage = null;
    if (typeof fieldsByCountry[0] != 'undefined' && typeof fieldsByCountry[0].language === 'string') {
      testLanguage = fieldsByCountry[0].language;
      component.getCountryFromLanguage(testLanguage);
    }

    expect(component.currentCountry).toBeDefined();
  });

  it("getCountryFromCountry should set the country settings based off of the country chosen", () => {
    let fieldsByCountry = null;
    try {
      fieldsByCountry = require('./fieldsByCountry.json');
    } catch (e) {

    }
    let testCountry = null;
    if (typeof fieldsByCountry[0] != 'undefined' && typeof fieldsByCountry[0].theCountry === 'string') {
      testCountry = fieldsByCountry[0].theCountry;
      component.getCountryFromLanguage(testCountry);
    }

    expect(component.currentCountry).toBeDefined();
  });

  it("isElementRequired should tell you whether or not an element is required", () => {

    let result = component.isElementRequired('first_name');
    expect(result).toBeTruthy();

    result = component.isElementRequired('apt_suite');
    expect(result).toBeFalsy();
  });

  it("isElementVisible should tell you whether or not an element is visible", () => {

    let result = component.isElementVisible('first_name');
    expect(result).toBeTruthy();

    result = component.isElementVisible('specify_other');
    expect(result).toBeFalsy();
  });

  it("isElementErrored should tell you whether or not an element is errored", () => {
    let result = component.isElementErrored('first_name');
    expect(result).toBeFalsy();

    component.submitInfo = true;
    result = component.isElementErrored('fake_element');
    expect(result).toBeFalsy();

    component.inputValueByName['first_name'] = '';
    result = component.isElementErrored('first_name');
    expect(result).toBeTruthy();

    component.inputValueByName['first_name'] = 'test';
    result = component.isElementErrored('first_name');
    expect(result).toBeFalsy();

  });

  it("isAnElementErrored should tell you whether or not one of the elements is errored", () => {
    let result = component.isAnElementErrored(['first_name', 'last_name']);
    expect(result).toBeFalsy();

    component.submitInfo = true;
    result = component.isAnElementErrored(['fake_element', 'another_fake_element']);
    expect(result).toBeFalsy();

    component.inputValueByName['first_name'] = '';
    result = component.isAnElementErrored(['first_name', 'last_name']);
    expect(result).toBeTruthy();

    component.inputValueByName['first_name'] = 'test';
    component.inputValueByName['last_name'] = 'test';
    result = component.isAnElementErrored(['first_name', 'last_name']);
    expect(result).toBeFalsy();

  });

  it("isOptionSelected should tell you whether or not the current country is the one selected", () => {
    let result = component.isOptionSelected('GE');
    expect(result).toBeFalsy();

    result = component.isOptionSelected('US');
    expect(result).toBeTruthy();
  });


  it("isAllInfoCorrect should tell you whether or not the fields are filled in correctly", () => {
    component.submitInfo = true;
    let result = component.isAllInfoCorrect();
    expect(result).toBeFalsy();

    component.inputValueByName['first_name'] = 'test';
    component.inputValueByName['last_name'] = 'test';

    result = component.isAllInfoCorrect();
    expect(result).toBeTruthy();
  });

  it("submitRegistration should recognize you as spammer if fakeFormName is filled in", () => {
    component.inputValueByName['first_name'] = 'test';
    component.inputValueByName['last_name'] = 'test';
    component.captchaResponse = "test";
    component.inputValueByName[component.fakeFormName] = "example@gmail.com";

    component.submitRegistration();
    expect(component.spammer).toBeTruthy();
  });

  it("updateDays should set daysInMonth variable based on the year and month", () => {
    component.inputValueByName['purchase_month'] = '02';
    component.inputValueByName['purchase_year'] = '2014';

    component.updateDays();
    expect(component.daysInMonth.length === 28).toBeTruthy();

    component.inputValueByName['purchase_month'] = '02';
    component.inputValueByName['purchase_year'] = '2012';

    component.updateDays();
    expect(component.daysInMonth.length === 29).toBeTruthy();

  });

});
//https://jasmine.github.io/2.4/introduction.html