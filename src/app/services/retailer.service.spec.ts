import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RetailerService } from './retailer.service';
import { AppConfigModule } from '../config';


describe('RetailerService', () => {

  let service: RetailerService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppConfigModule,
      ],
      providers: [
        RetailerService
      ]
    });

    service = TestBed.get(RetailerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should get retailers', (done) => {
    service.getAll$()
      .subscribe(res => {
        expect(res).toEqual(
          [
            {name: 'Best Buy', id: 'bestbuy' },
            {name: 'Blendtec.com', id: 'blendteccom'}
          ]
        );
        done();
      });

    const request = httpMock.expectOne('https://s3-us-west-1.amazonaws.com/data.blendtec.com/retailers.json');
    request.flush([
      {name: 'Best Buy', id: 'bestbuy' },
      {name: 'Blendtec.com', id: 'blendteccom'}
    ]);


    httpMock.verify();
  });
});


