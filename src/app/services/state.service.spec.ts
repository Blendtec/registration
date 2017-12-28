import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StateService } from './state.service';
import { AppConfigModule } from '../config';


describe('StateService', () => {

  let service: StateService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppConfigModule,
      ],
      providers: [
        StateService
      ]
    });

    service = TestBed.get(StateService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should get states', (done) => {
    service.getAll$()
      .subscribe(res => {
        expect(res).toEqual(
          [
            {short: 'AL', name: 'Alabama', country: 'US', region: '', alt: []},
            {short: 'AK', name: 'Alaska', country: 'US', region: '', alt: []},
          ]
        );
        done();
      });

    const request = httpMock.expectOne('https://s3-us-west-1.amazonaws.com/data.blendtec.com/states.json');
    request.flush([
      {short: 'AL', name: 'Alabama', country: 'US', region: '', alt: []},
      {short: 'AK', name: 'Alaska', country: 'US', region: '', alt: []},
    ]);


    httpMock.verify();
  });
});


