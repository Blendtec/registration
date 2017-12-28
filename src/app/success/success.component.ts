import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/throw';
import {
  StoreService
} from '../services';
import {
  AnimationReferenceMetadata,
  animation,
  keyframes,
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginRight: -1000
            }),

            animate('1s ease-in-out', style({
                marginRight: 0
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
                marginRight: -1000
            }))
        ])
    ]);


export const slideInOutAnimationLeft =
    trigger('slideInOutAnimationLeft', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginLeft: -1000
            }),

            animate('1s ease-in-out', style({
                marginLeft: 0
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
                marginLeft: -1000
            }))
        ])
    ]);

export const slideInOutAnimationTop =
    trigger('slideInOutAnimationTop', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginTop: -1000
            }),

            animate('1s ease-in-out', style({
                marginTop: 0
            }))
        ]),
        transition(':leave', [
            animate('.5s ease-in-out', style({
                marginTop: -1000
            }))
        ])
    ]);

export const slideInOutAnimationBottom =
    trigger('slideInOutAnimationBottom', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              marginBottom: -1000
            }),

            animate('1s ease-in-out', style({
                marginBottom: 0
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
                marginBottom: -1000
            }))
        ])
    ]);

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        state('*', style({
        })),
        transition(':enter', [
            style({
              opacity: 0
            }),

            animate('1s ease-in-out', style({
              opacity: 1
            }))
        ]),
        transition(':leave', [
            animate('1s ease-in-out', style({
              opacity: 0
            }))
        ])
    ]);

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
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
    ]),
    slideInOutAnimation,
    slideInOutAnimationLeft,
    slideInOutAnimationBottom,
    slideInOutAnimationTop,
    fadeInAnimation
  ]
})
export class SuccessComponent implements OnInit {
  language: string;

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
  }

  setLanguage(lan): void {
    this.language = lan;
    this.storeService.passLanguage(this.language);
  }

  getLanguage() {
    return this.storeService.getLanguage();
  }

}



