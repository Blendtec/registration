import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { StoreService } from '../services/store.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationService, RetailerService, WindowService, CountryService, StateService } from '../services';
import { NgPipesModule } from 'ngx-pipes';
import { MyDatePickerModule } from 'mydatepicker';
import { AppRoutingModule } from '../app-routing.module';
import { APP_CONFIG, APP_DI_CONFIG, AppConfigModule } from '../config/app-config.module';

declare function require(url: string);

describe('RegistrationComponent', () => {


  const registrationSvcMock = jasmine.createSpyObj('RegistrationService', ['post']);
  registrationSvcMock.post.and.returnValue(Promise.resolve());

  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        AppConfigModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MyDatePickerModule,
        NgPipesModule,
        ReactiveFormsModule,
        RecaptchaModule.forRoot()
      ],
      providers: [
        StoreService,
        FormBuilder,
        RegistrationService,
        WindowService,
        RetailerService,
        CountryService,
        StateService,
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: APP_CONFIG, useValue: {captchaKey: 'testKey'}}
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set captchaKey from config', () => {
      expect(component.captchaKey).toEqual('testKey');
  });

  describe('onSubmit', () => {

    it('should set registration Error to true when registration fails', done => {
      registrationSvcMock.post.and.returnValue(Promise.reject('api error'));

      component.onSubmit(component.registration)
        .then(() => {
          expect(component.registrationError).toBe(true);
          done();
        });
    });

  });
});
