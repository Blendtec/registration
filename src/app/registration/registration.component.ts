import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/throw';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtherPurchasePlaceValidator, RecaptchaValidator } from '../validators';
import {
  RetailerService,
  CountryService,
  WindowService,
  StateService,
  RegistrationService,
  StoreService
} from '../services';
import { RegistrationCommand, ICountry, IState } from '../models';
import { APP_CONFIG, AppConfig } from '../config';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  showSerialNumInfo = 'inactive';

  public registrationError = false;
  public registrationDone = false;
  public registration: FormGroup;
  public retailers$: Observable<any[]>;
  public countries$: Observable<ICountry[]>;
  public states$: Observable<any[]>;
  public dateOptions: any = {
    dateFormat: 'mm-dd-yyyy'
  };
  public captchaKey: string;

  private langSub: Subscription;

  constructor(private storeService: StoreService,
              private formBuilder: FormBuilder,
              private registrationService: RegistrationService,
              private countryService: CountryService,
              private stateService: StateService,
              private retailerService: RetailerService,
              @Inject(APP_CONFIG) private config: AppConfig) {

    this.captchaKey = config.captchaKey;
    this.retailers$ = retailerService.getAll$();
    this.countries$ = countryService.getAll$();
    this.states$ = stateService.getAll$();
  }

  ngOnInit() {
    this.createForm();
  }

  showSerialInfo(): void {
    this.showSerialNumInfo = 'active';
  }

  registrationComplete(): void {
    this.storeService.passState('done');
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
        country: ['US', [Validators.required]],
        stateProvince: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]]
      }),
      serial: this.formBuilder.group({
        prefix: ['', [Validators.required]],
        suffix: ['', [Validators.required]]
      }),
      purchase: this.formBuilder.group({
        place: ['', []],
        other: ['', []],
        date: ['', [Validators.required]]
      }, {validator: OtherPurchasePlaceValidator}),
      marketingOptIn: ['', []],
      recaptcha: [false, [RecaptchaValidator]]
    });
  }

  public onSubmit(formData: any): Promise<void> {
    return this.registrationService.post(new RegistrationCommand(formData.value))
      .then(() => {
        this.registrationDone = true;
        this.registration.reset();
        this.registrationComplete();
      })
      .catch(() => { this.registrationError = true; });
  }
}



