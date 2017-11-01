import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class StoreService {
  private language = new Subject<string>();
  private tester = true;

  retrieveLanguage$ = this.language.asObservable();

  constructor() {
  	this.language.next('en');
   }


  passLanguage(data: string){
    this.language.next(data);
  }

  getLanguage(){
  	return this.language.asObservable();
  }

}
