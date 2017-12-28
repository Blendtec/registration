import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CountryService } from './country.service';
import { AppConfigModule } from '../config';


describe('CountryService', () => {

  let service: CountryService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppConfigModule,
      ],
      providers: [
        CountryService
      ]
    });

    service = TestBed.get(CountryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should get countries', (done) => {
    service.getAll$()
      .subscribe(res => {
        expect(res).toEqual(
          [
            {name: 'United States', code: 'US'},
            {name: 'Canada', code: 'CA'}
          ]
        );
        done();
      });

    const request = httpMock.expectOne('https://s3-us-west-1.amazonaws.com/data.blendtec.com/countries.json');
    request.flush([
      {name: 'United States', code: 'US'},
      {name: 'Canada', code: 'CA'}
    ]);


    httpMock.verify();
  });
});


