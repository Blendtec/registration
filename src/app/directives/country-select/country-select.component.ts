import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../../config';
import { AppConfig } from '../../config/models';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent {


  public baseImageLocation = '';

  constructor(private translate: TranslateService, @Inject(APP_CONFIG) private config: AppConfig) {
      this.baseImageLocation = config.assets;
  }

  public setLanguage(code: string): void {
    this.translate.use(code);
  }

}
