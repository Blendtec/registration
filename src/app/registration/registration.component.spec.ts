import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { StoreService } from '../services/store.service';
import { RegistrationService } from '../services/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowService } from '../services/window.service';
import { CountryService } from '../services/country.service';

declare function require(url: string);

describe('RegistrationComponent', () => {

  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [RouterModule.forRoot([]), FormsModule, RecaptchaModule.forRoot(), HttpClientModule, BrowserAnimationsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' },
        StoreService, RegistrationService, WindowService, CountryService]
    })
      .compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  // it('should be created', () => {
    // expect(component).toBeTruthy();
  // });
});
