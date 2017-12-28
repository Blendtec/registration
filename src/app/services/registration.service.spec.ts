import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RegistrationService } from './registration.service';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';


describe('RegistrationService', () => {

  let requestService: RegistrationService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
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


