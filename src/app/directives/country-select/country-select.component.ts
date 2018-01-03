import { Component } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent {


  public baseImageLocation = '';

  constructor(winRef: WindowService, private translate: TranslateService) {
    if (winRef.nativeWindow.imageStorage) {
      this.baseImageLocation = winRef.nativeWindow.imageStorage;
    }
  }

  public setLanguage(code: string): void {
    this.translate.use(code);
  }

}
