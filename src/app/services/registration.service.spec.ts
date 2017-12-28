import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegistrationService } from './registration.service';
import { AppConfigModule } from '../config/app-config.module';


describe('RegistrationService', () => {

  let requestService: RegistrationService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppConfigModule
      ],
      providers: [
        RegistrationService
      ]
    });

    requestService = TestBed.get(RegistrationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(requestService).toBeTruthy();
  });
});


