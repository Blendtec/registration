import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { StoreService } from '../services/store.service';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';
import {
  AnimationReferenceMetadata,
  animation,
  keyframes,
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { WindowService } from '../services/window.service';
import { CountryService } from '../services/country.service';


declare function require(url: string);

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginRight: -1000
            }),

            animate('1s ease-in-out', style({
                marginRight: 0
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
                marginRight: -1000
            }))
        ])
    ]);


export const slideInOutAnimationLeft =
    trigger('slideInOutAnimationLeft', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginLeft: -1000
            }),

            animate('1s ease-in-out', style({
                marginLeft: 0
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
                marginLeft: -1000
            }))
        ])
    ]);

export const slideInOutAnimationTop =
    trigger('slideInOutAnimationTop', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginTop: -1000
            }),

            animate('1s ease-in-out', style({
                marginTop: 0
            }))
        ]),
        transition(':leave', [
            animate('.5s ease-in-out', style({
                marginTop: -1000
            }))
        ])
    ]);

export const slideInOutAnimationBottom =
    trigger('slideInOutAnimationBottom', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginBottom: -1000
            }),

            animate('1s ease-in-out', style({
                marginBottom: 0
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
                marginBottom: -1000
            }))
        ])
    ]);

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              opacity: 0
            }),

            animate('1s ease-in-out', style({
              opacity: 1
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
              opacity: 0
            }))
        ])
    ]);




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
    ]),
    slideInOutAnimation,
    slideInOutAnimationLeft,
    slideInOutAnimationBottom,
    slideInOutAnimationTop,
    fadeInAnimation
  ]
})
export class RegistrationComponent implements OnInit, AfterViewInit {

  language: string;
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
  registrationError = false;
  registrationDone = false;
  registrationSubmitting = false;
  errorMessage = '';

  baseImageLocation = '';
  private apiLocation = 'http://blendtec.test';
  private liveApiLocation = 'https://www.blendtec.com';
  private registrationApiUrl = '/product_registrations/addApi';

  constructor(private storeService: StoreService,
    private el: ElementRef,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private requestService: RequestService,
    private winRef: WindowService,
    private countryService: CountryService) {

    if (winRef.nativeWindow.imageStorage) {
      this.baseImageLocation = winRef.nativeWindow.imageStorage;
    }
    if (winRef.nativeWindow.liveSite) {
      this.apiLocation = this.liveApiLocation;
    }
  }

  registrationDoneTest() {
    this.registrationDone = !this.registrationDone;
    this.winRef.nativeWindow.scrollTo(0, 0);
  }

  removeErrorMessage() {
    this.errorMessage = '';
    this.registrationError = false;
  }

  setDefaultInputValues() {
    this.submitInfo = false;
    this.currentYear = (new Date()).getFullYear();

    this.submittedInfoAllCorrect = [];
    this.submittedInfoCorrect = true;
    this.startYear = 1997;

    this.yearsArray = [];
    this.daysInMonth = [];
    for (let i = this.currentYear; i >= this.startYear; i--) {
      this.yearsArray.push(i);
    }
    this.countryService.resetValues();
    this.countryService.getCountryFromLanguage(this.language);
    this.updateDays();

  }

  ngOnInit() {
    this.setDefaultInputValues();
    const self = this;

    this.sendMeStuff = true;
  }

  setLanguage(lan): void {
    this.language = lan;
    this.storeService.passLanguage(this.language);
    this.countryService.getCountryFromLanguage(this.language);
  }

  getLanguage() {
    return this.storeService.getLanguage();
  }

  ngAfterViewInit() {
    const self = this;
    this.route.params.subscribe(params => {
      if (params['lan']) {
        self.language = params['lan'];
      } else {
        self.language = 'en';
      }
      self.countryService.getCountryFromLanguage(self.language);
      self.storeService.passLanguage(self.language);
    });
    this.cdRef.detectChanges();
  }

  captchaResolved(event: string): void {
    this.captchaResponse = event;
  }

  setInputValueByName(name: string, value: any): void {
    this.countryService.inputValueByName[name] = value;
  }

  setCurrentCountryManually(country: Object): void {
    this.countryService.currentCountry = country;
  }

  setCountriesManually(countries: Object[]): void {
    this.countryService.countries = countries;
  }

  setFieldsByCountryManually(fieldsByCountry: Object[]): void {
    this.countryService.fieldsByCountry = fieldsByCountry;
  }

  submitRegistration(): void {
    if (!this.captchaResponse) {
      this.captchaNotFilled = true;
      return;
    }

    this.captchaNotFilled = false;
    this.submitInfo = true;
    console.log(this.countryService.inputValueByName);
    if (this.countryService.isAllInfoCorrect(this.submitInfo)) {
      const postObject = {};
      this.countryService.inputValueByName['purchase_date'] = this.countryService.inputValueByName['purchase_year'] +
      '-' +
      this.countryService.inputValueByName['purchase_month'] +
      '-' +
      this.countryService.inputValueByName['purchase_day'];

      this.countryService.inputValueByName['state'] = this.countryService.inputValueByName['state_province'];
      this.countryService.inputValueByName['source'] = '';
      this.countryService.inputValueByName['captcha'] = this.captchaResponse;
      postObject['ProductRegistration'] = this.countryService.inputValueByName;
      postObject['ProductRegistration']['source'] = 'shopify-web';
      if (this.countryService.inputValueByName[this.fakeFormName]) {
        this.spammer = true;
      }
      if (!this.spammer) {
        const self = this;
        self.registrationSubmitting = true;
        this.requestService.submitData(this.apiLocation + this.registrationApiUrl, postObject, function() {
          self.winRef.nativeWindow.scrollTo(0, 0);
          self.setDefaultInputValues();
          self.registrationSubmitting = false;
          self.registrationError = false;
          self.registrationDone = true;
          self.errorMessage = '';
        }, function(error: string) {
          self.registrationSubmitting = false;
          self.registrationError = true;
          self.registrationDone = false;
          self.errorMessage = error;
        });

      } else {
        this.spammer = true;
      }
    }
  }

  updateDays(): void {
    if (this.countryService.inputValueByName['purchase_month'] && this.countryService.inputValueByName['purchase_year']) {
      this.daysInMonth = [];
      const numDays = new Date(this.countryService.inputValueByName['purchase_year'],
        this.countryService.inputValueByName['purchase_month'], 0).getDate();
      for (let i = 1; i <= numDays; i++) {
        this.daysInMonth.push(i);
      }
      if (Number(this.countryService.inputValueByName['purchase_day']) > numDays) {
        this.countryService.inputValueByName['purchase_day'] = String(numDays);
      }
    }
  }

  enableOtherBox(): void {
    if (this.countryService.inputValueByName['purchase_place'] === 'Other Physical Retailer' ||
      this.countryService.inputValueByName['purchase_place'] === 'Other Online Retailer') {

      this.countryService.currentCountry['specify_other'] = this.countryService.currentCountry['specify_other'] || {};
      this.countryService.currentCountry['specify_other']['isRequired'] = true;
      this.countryService.currentCountry['specify_other']['isVisible'] = true;

    } else {
      this.countryService.currentCountry['specify_other'] = this.countryService.currentCountry['specify_other'] || {};
      this.countryService.currentCountry['specify_other']['isRequired'] = false;
      this.countryService.currentCountry['specify_other']['isVisible'] = false;
    }
  }

  showSerialInfo(): void {
    this.showSerialNumInfo = 'active';
  }

  hideSerialInfo(): void {
    this.showSerialNumInfo = 'inactive';
  }

}
