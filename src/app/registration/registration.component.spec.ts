import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { StoreService } from '../services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationService, RetailerService, WindowService, CountryService, StateService } from '../services';
import { NgPipesModule } from 'ngx-pipes';
import { MyDatePickerModule } from 'mydatepicker';

declare function require(url: string);

describe('RegistrationComponent', () => {


  const registrationSvcMock = jasmine.createSpyObj('RegistrationService', ['post']);
  registrationSvcMock.post.and.returnValue(Promise.resolve());

  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [RouterModule.forRoot([]),
        ReactiveFormsModule,
        NgPipesModule,
        FormsModule,
        MyDatePickerModule,
        RecaptchaModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'},
        StoreService,
        FormBuilder,
        RegistrationService,
        WindowService,
        RetailerService,
        CountryService,
        StateService,
        {provide: RegistrationService, useValue: registrationSvcMock}
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

  describe('onSubmit', () => {

    it('should set registration Error to true when registration fails', done => {
      registrationSvcMock.post.and.returnValue(Promise.reject());

      component.onSubmit(component.registration)
        .then(() => {
          expect(component.registrationError).toBe(true);
          done();
        });
    });

  });
});
