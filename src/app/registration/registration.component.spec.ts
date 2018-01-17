import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { StoreService } from '../services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService, RetailerService, WindowService, CountryService, StateService } from '../services';
import { NgPipesModule } from 'ngx-pipes';
import { MyDatePickerModule } from 'mydatepicker';
import { APP_CONFIG, AppConfigModule } from '../config';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CountrySelectComponent } from '../directives/country-select/country-select.component';
import { SerialModalComponent } from '../directives/serial-modal.component/serial-modal.component';
import { SerialPrefixService } from '../services/serial-prefix.service';

describe('RegistrationComponent', () => {


  const registrationSvcMock = jasmine.createSpyObj('RegistrationService', ['post']);
  registrationSvcMock.post.and.returnValue(Promise.resolve());

  const stateSvcMock = jasmine.createSpyObj('StateService', ['getAll$']);
  stateSvcMock.getAll$.and.returnValue(Promise.resolve());

  const countrySvcMock = jasmine.createSpyObj('CountryService', ['getAll$']);
  countrySvcMock.getAll$.and.returnValue(Promise.resolve());

  const retailerSvcMock = jasmine.createSpyObj('RetailerService', ['getAll$']);
  retailerSvcMock.getAll$.and.returnValue(Promise.resolve());

  const registrationFormMock = {
    value: {
      firstName: '',
      lastName: '',
      marketingOptIn: true,
      recaptcha: '',
      address: {
        one: '',
        two: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        email: '',
        phone: ''
      },
      purchase: {
        place: '',
        other: ''
      },
      serial: {
        prefix: '',
        suffix: ''
      }
    }
  };

  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent, CountrySelectComponent, SerialModalComponent],
      imports: [
        AppConfigModule,
        FormsModule,
        HttpClientModule,
        MyDatePickerModule,
        NgPipesModule,
        ReactiveFormsModule,
        RecaptchaModule.forRoot(),
        TranslateModule
      ],
      providers: [
        FormBuilder,
        WindowService,
        StoreService,
        {provide: RegistrationService, useValue: registrationSvcMock},
        {provide: RetailerService, useValue: retailerSvcMock},
        {provide: CountryService, useValue: countrySvcMock},
        {provide: StateService, useValue: stateSvcMock},
        {provide: TranslateService, useValue: {} },
        {provide: SerialPrefixService, useValue: {} },
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: APP_CONFIG, useValue: {s3: 's3Url', captchaKey: 'testKey'}},
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set captchaKey from config', () => {
      expect(component.captchaKey).toEqual('testKey');
  });

  describe('onSubmit', () => {

    it('should set registration Error to true when registration fails', done => {
     registrationSvcMock.post.and.callFake(() => Promise.reject(''));

      component.onSubmit(registrationFormMock)
        .then(() => {
          expect(component.registrationError).toBe(true);
          done();
        });
    });

  });
});
