import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from './services';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  appState: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private storeService: StoreService, private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.storeService.retrieveState$
      .takeUntil(this.destroy$)
      .subscribe(data => {
        console.log('got here 3');
        this.appState = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
