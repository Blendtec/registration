import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectComponent } from './country-select.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WindowService } from '../../services/window.service';
import { APP_CONFIG } from '../../config';

describe('CountrySelectComponent', () => {
  let component: CountrySelectComponent;
  let fixture: ComponentFixture<CountrySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySelectComponent ],
      imports: [TranslateModule],
      providers: [
        WindowService,
        {provide: APP_CONFIG, useValue: {s3: 's3Url', captchaKey: 'testKey'}},
        {provide: TranslateService, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySelectComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
