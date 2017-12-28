import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from './services';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  appStateSub: Subscription;
  appState: string;


  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    const self = this;
    this.appStateSub = this.storeService.retrieveState$.subscribe(
      data => {
        self.appState = data;
      });
  }

  ngOnDestroy() {
    this.appStateSub.unsubscribe();
  }
}
