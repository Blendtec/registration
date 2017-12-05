import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RequestService } from './request.service';


describe('RequestService', () => {

  let requestService: RequestService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        RequestService
      ]
    });

    requestService = TestBed.get(RequestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(requestService).toBeTruthy();
  });

  it('submitRegistration should post info to url when fakeFormName is not filled in and all info is correct', () => {
    console.log(requestService.submitData('fakeURL', {}, function() {
      console.log('hello world');

    }));
  });
});


