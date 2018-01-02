import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from './services';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  appStateSub: Subscription;
  appState: string;


  constructor(private storeService: StoreService, private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.appStateSub = this.storeService.retrieveState$
      .subscribe(data => {
        this.appState = data;
        });
  }

  ngOnDestroy() {
    this.appStateSub.unsubscribe();
  }
}
