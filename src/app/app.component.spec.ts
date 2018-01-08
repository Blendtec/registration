import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { MyDatePickerModule } from 'mydatepicker';
import { RecaptchaModule } from 'ng-recaptcha';
import { StoreService } from './services/store.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CountrySelectComponent } from './directives/country-select/country-select.component';
import { StateService } from './services/state.service';
import { Observable } from 'rxjs/Observable';
import { SerialModalComponent } from './directives/serial-modal.component/serial-modal.component';


describe('AppComponent', () => {

  let storeServiceMock: StoreService;

  beforeEach(async(() => {

    const storeSvc = jasmine.createSpyObj('StoreService', ['retrieveState$']);
    storeSvc.retrieveState$.and.returnValue(Observable.of({}));
    storeServiceMock = storeSvc;

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RegistrationComponent,
        SuccessComponent,
        CountrySelectComponent,
        SerialModalComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
        NgHttpLoaderModule,
        FormsModule,
        ReactiveFormsModule,
        MyDatePickerModule,
        NgPipesModule,
        BrowserModule,
        BrowserAnimationsModule,
        RecaptchaModule.forRoot(),
        TranslateModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TranslateService, useValue: {} },
        { provide: StoreService, useValue: storeServiceMock },
        FormBuilder, StateService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

});
