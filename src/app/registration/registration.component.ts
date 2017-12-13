import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { StoreService } from '../store.service';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare function require(url: string);

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [
    trigger('infoState', [
      state('inactive', style({
        top: '-40px',
        display: 'none',
        opacity: '.2'
      })),
      state('active', style({
        display: 'block',
        top: '30px',
        opacity: '1'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('0ms ease-out'))
    ]),
    trigger('backgroundScreen', [
      state('inactive', style({
        display: 'none',
      })),
      state('active', style({
        display: 'block',
      })),
      transition('inactive => active', animate('0ms ease-in')),
      transition('active => inactive', animate('0ms ease-out'))
    ])
  ]
})
export class RegistrationComponent implements OnInit {

  language: string;
  fieldsByCountry: Object[];
  currentCountry: Object;
  inputValueByName: Object;
  submitInfo: boolean;
  submittedInfoAllCorrect: boolean[];
  submittedInfoCorrect: boolean;
  startYear: number;
  currentYear: number;
  yearsArray: number[];
  daysInMonth: number[];
  countries: Object[];
  states: Object[];
  sendMeStuff: boolean;
  showSerialNumInfo = 'inactive';
  fakeFormName = 'email2'; // if a form with this name is submitted then it will not submit.
  spammer = false;
  publicKey = '6LcWmzIUAAAAADoSNPMqAECfcdIl9Z8B4czc4MjP';
  captchaResponse = null;
  captchaNotFilled = false;

  private registrationApiUrl = 'http://blendtec.dev/product_registrations/addApi';

  constructor(private storeService: StoreService,
    private el: ElementRef,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private requestService: RequestService) {
  }


  ngOnInit() {

  }

}
