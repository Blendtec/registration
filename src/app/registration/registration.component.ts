import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { StoreService } from '../store.service';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { WindowService } from '../window.service';

declare function require(url: string);

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [
    trigger('infoState', [
      state('inactive', style({
        top: '-40px',
        display: 'none',
        opacity: '.2'
      })),
      state('active', style({
        display: 'block',
        top: '30px',
        opacity: '1'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('0ms ease-out'))
    ]),
    trigger('backgroundScreen', [
      state('inactive', style({
        display: 'none',
      })),
      state('active', style({
        display: 'block',
      })),
      transition('inactive => active', animate('0ms ease-in')),
      transition('active => inactive', animate('0ms ease-out'))
    ])
  ]
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  language: string;
  fieldsByCountry: Object[];
  currentCountry: Object;
  inputValueByName: Object;
  submitInfo: boolean;
  submittedInfoAllCorrect: boolean[];
  submittedInfoCorrect: boolean;
  startYear: number;
  currentYear: number;
  yearsArray: number[];
  daysInMonth: number[];
  countries: Object[];
  states: Object[];
  sendMeStuff: boolean;
  showSerialNumInfo = 'inactive';
  fakeFormName = 'email2'; // if a form with this name is submitted then it will not submit.
  spammer = false;
  publicKey = '6LcWmzIUAAAAADoSNPMqAECfcdIl9Z8B4czc4MjP';
  captchaResponse = null;
  captchaNotFilled = false;

  baseImageLocation = '';
  private apiLocation = 'http://noideawhatiamdoing-1264745870.us-west-1.elb.amazonaws.com/';
  private liveApiLocation = 'https://www.blendtec.com';
  private registrationApiUrl = '/product_registrations/addApi';

  constructor(private storeService: StoreService,
    private el: ElementRef,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private requestService: RequestService,
    private winRef: WindowService) {

    if (winRef.nativeWindow.imageStorage) {
      this.baseImageLocation = winRef.nativeWindow.imageStorage;
    }
    if (winRef.nativeWindow.liveSite) {
      this.apiLocation = this.liveApiLocation
    }
  }

  setDefaultInputValues() {
    this.inputValueByName = {};
    this.submitInfo = false;
    this.currentYear = (new Date()).getFullYear();
    this.inputValueByName['purchase_month'] = '01';
    this.inputValueByName['purchase_year'] = String(this.currentYear);
    this.inputValueByName['purchase_day'] = '1';
    this.inputValueByName['purchase_place'] = 'Amazon';
    this.submittedInfoAllCorrect = [];
    this.submittedInfoCorrect = true;
    this.startYear = 1997;

    this.yearsArray = [];
    this.daysInMonth = [];
    for (let i = this.currentYear; i >= this.startYear; i--) {
      this.yearsArray.push(i);
    }
    this.getCountryFromLanguage(this.language);
    this.updateDays();

  }

  ngOnInit() {
    this.setDefaultInputValues();
    const self = this;
    try {
        self.fieldsByCountry = require('./fieldsByCountry.json');
        self.countries = require('./countries.json');
        self.states = require('./states.json');
    } catch (e) {
      console.log(e);
    }

    this.sendMeStuff = true;
  }

  setLanguage(lan): void {
    this.language = lan;
    this.storeService.passLanguage(this.language);
  }

  getLanguage() {
    return this.storeService.getLanguage();
  }

  getCountryFromLanguage(language: string): void {
    const self = this;
    if (this.fieldsByCountry) {
      for (let i = 0; i < this.fieldsByCountry.length; i++) {
        if (typeof this.fieldsByCountry[i] === 'object' &&
          typeof this.fieldsByCountry[i]['language'] === 'string' &&
          this.fieldsByCountry[i]['language'] === language) {
          self.inputValueByName['country'] = this.fieldsByCountry[i]['theCountry'];
          self.currentCountry = this.fieldsByCountry[i];
          return;
        }
      }
      self.currentCountry = this.fieldsByCountry[0];
    }
  }

  getCountryFromCountry(country: string): void {
    const self = this;
    for (let i = 0; i < this.fieldsByCountry.length; i++) {
      if (typeof this.fieldsByCountry[i] === 'object' &&
        typeof this.fieldsByCountry[i]['theCountry'] === 'string' &&
        this.fieldsByCountry[i]['theCountry'] === country) {
        self.currentCountry = this.fieldsByCountry[i];
        return;
      }
    }
    self.currentCountry = this.fieldsByCountry[0];
  }

  ngAfterViewInit() {
    const self = this;
    this.route.params.subscribe(params => {
      if (params['lan']) {
        self.language = params['lan'];
      } else {
        self.language = 'en';
      }
      self.getCountryFromLanguage(self.language);
      self.storeService.passLanguage(self.language);
    });
    this.cdRef.detectChanges();
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

  isElementErrored(elementName: string): boolean {
    if (this.submitInfo) {
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

  isAnElementErrored(elementNames: string[]): boolean {
    for (let i = 0; i < elementNames.length; i++) {
      if (this.isElementErrored(elementNames[i])) {
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

  isAllInfoCorrect(): boolean {
    const self = this;
    for (const field in this.currentCountry) {
      if (typeof this.currentCountry[field] === 'object' &&
        typeof this.currentCountry[field]['isRequired'] === 'boolean') {
        const out = self.isElementErrored(field);
        if (out) {
          return false;
        }
      }
    }
    return true;
  }

  captchaResolved(event: string): void {
    this.captchaResponse = event;
  }

  submitRegistration(): void {
    if (!this.captchaResponse) {
      this.captchaNotFilled = true;
      return;
    }

    this.captchaNotFilled = false;
    this.submitInfo = true;
    if (this.isAllInfoCorrect()) {
      const postObject = {};
      this.inputValueByName['purchase_date'] = this.inputValueByName['purchase_year'] +
      '-' +
      this.inputValueByName['purchase_month'] +
      '-' +
      this.inputValueByName['purchase_day'];

      this.inputValueByName['state'] = this.inputValueByName['state_province'];
      this.inputValueByName['source'] = '';
      this.inputValueByName['captcha'] = this.captchaResponse;
      postObject['ProductRegistration'] = this.inputValueByName;
      if (this.inputValueByName[this.fakeFormName]) {
        this.spammer = true;
      }
      if (!this.spammer) {
        const self = this;
        this.requestService.submitData(this.apiLocation + this.registrationApiUrl, postObject, function() {
          self.setDefaultInputValues();
        });

      } else {
        this.spammer = true;
      }
    }
  }

  updateDays(): void {
    if (this.inputValueByName['purchase_month'] && this.inputValueByName['purchase_year']) {
      this.daysInMonth = [];
      const numDays = new Date(this.inputValueByName['purchase_year'], this.inputValueByName['purchase_month'], 0).getDate();
      for (let i = 1; i <= numDays; i++) {
        this.daysInMonth.push(i);
      }
      if (Number(this.inputValueByName['purchase_day']) > numDays) {
        this.inputValueByName['purchase_day'] = String(numDays);
      }
    }
  }

  enableOtherBox(): void {
    if (this.inputValueByName['purchase_place'] === 'Other Physical Retailer' ||
      this.inputValueByName['purchase_place'] === 'Other Online Retailer') {

      this.currentCountry['specify_other'] = this.currentCountry['specify_other'] || {};
      this.currentCountry['specify_other']['isRequired'] = true;
      this.currentCountry['specify_other']['isVisible'] = true;

    } else {
      this.currentCountry['specify_other'] = this.currentCountry['specify_other'] || {};
      this.currentCountry['specify_other']['isRequired'] = false;
      this.currentCountry['specify_other']['isVisible'] = false;
    }
  }

  showSerialInfo(): void {
    this.showSerialNumInfo = 'active';
  }

  hideSerialInfo(): void {
    this.showSerialNumInfo = 'inactive';
  }

}
