import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/throw';
import {
  StoreService
} from '../services';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
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



