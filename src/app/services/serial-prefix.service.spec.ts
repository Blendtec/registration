import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SerialPrefixService } from './serial-prefix.service';
import { AppConfigModule } from '../config';


describe('SerialPrefixService', () => {

  let service: SerialPrefixService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppConfigModule,
      ],
      providers: [
        SerialPrefixService
      ]
    });

    service = TestBed.get(SerialPrefixService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should get prefixes', (done) => {
    service.getAll$()
      .subscribe(res => {
        expect(res).toEqual(
          [
            'ABCDEFG',
            'TTBB'
          ]
        );
        done();
      });

    const request = httpMock.expectOne('http://localhost:3000/serial-numbers/prefixes');
    request.flush([
      'ABCDEFG',
      'TTBB'
    ]);


    httpMock.verify();
  });
});


