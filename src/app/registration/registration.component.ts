import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/throw';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtherPurchasePlaceValidator, RecaptchaValidator } from '../validators';
import { RetailerService, CountryService, WindowService, StateService, RegistrationService, StoreService } from '../services';
import { RegistrationCommand, ICountry, IState  } from '../models';


declare function require(url: string);


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  language: string;
  showSerialNumInfo = 'inactive';
  fakeFormName = 'email2'; // if a form with this name is submitted then it will not submit.
  spammer = false;
  publicKey = '6LcWmzIUAAAAADoSNPMqAECfcdIl9Z8B4czc4MjP';
  captchaResponse = null;
  registrationError = false;
  registrationDone = false;
  registrationSubmitting = false;
  errorMessage = '';

  baseImageLocation = '';
  private apiLocation = 'http://blendtec.test';
  private liveApiLocation = 'https://www.blendtec.com';
  private registrationApiUrl = '/product_registrations/addApi';

  public registration: FormGroup;
  public retailers$: Observable<any[]>;
  public countries$: Observable<ICountry[]>;
  public states$: Observable<any[]>;
  public dateOptions: any = {
    dateFormat: 'mm-dd-yyyy'
  };

  constructor(private storeService: StoreService,
              private formBuilder: FormBuilder,
              private registrationService: RegistrationService,
              private winRef: WindowService,
              private countryService: CountryService,
              private stateService: StateService,
              private retailerService: RetailerService)  {

    if (winRef.nativeWindow.imageStorage) {
      this.baseImageLocation = winRef.nativeWindow.imageStorage;
    }
    if (winRef.nativeWindow.liveSite) {
      this.apiLocation = this.liveApiLocation;
    }
    this.retailers$ = retailerService.getAll$();
    this.countries$ = countryService.getAll$();
    this.states$ = stateService.getAll$();
  }

  removeErrorMessage() {
    this.errorMessage = '';
    this.registrationError = false;
  }

  ngOnInit() {
    this.createForm();
  }

  setLanguage(lan): void {
    this.language = lan;
    this.storeService.passLanguage(this.language);
  }

  getLanguage() {
    return this.storeService.getLanguage();
  }

  showSerialInfo(): void {
    this.showSerialNumInfo = 'active';
  }

  hideSerialInfo(): void {
    this.showSerialNumInfo = 'inactive';
  }

  private createForm(): void {
    this.registration = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: this.formBuilder.group({
        one: ['', [Validators.required]],
        two: ['', []],
        city: ['', [Validators.required]],
        zip: ['', [Validators.required]],
        country: [this.language || 'US', [Validators.required]],
        stateProvince: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]]
      }),
      serial: this.formBuilder.group({
        prefix: ['', [Validators.required]],
        suffix: ['', [Validators.required]]
      }),
      purchase: this.formBuilder.group({
        place: ['', [Validators.required]],
        other: ['', []],
        date: ['', [Validators.required]]
      }, {validator: OtherPurchasePlaceValidator}),
      marketingOptIn: ['', []],
      recaptcha: [false, [RecaptchaValidator]]
    });
  }

  public onSubmit(formData: any): Promise<void> {
    return this.registrationService.post(`${this.apiLocation}${this.registrationApiUrl}`, new RegistrationCommand(formData.value))
      .then((data) => {
        this.registration.reset();
      });
  }
}



