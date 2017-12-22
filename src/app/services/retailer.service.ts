import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRetailer } from '../models/retailer.interface';

const data: IRetailer[] = [
  {name: 'Amazon', id: 'amazon'},
  {name: 'Bed Bath &amp; Beyond', id: 'bedbath'},
  {name: 'Best Buy', id: 'bestbuy' },
  {name: 'Blendtec.com', id: 'blendteccom'},
  {name: 'Costco', id: 'costco'},
  {name: 'Costco.com', id: 'costcocom'},
  {name: 'HSN.com', id: 'hsncom'},
  {name: 'Macy\'s', id: 'macys'},
  {name: 'Sam\'s Club', id: 'samsclub'},
  {name: 'Other Physical Retailer', id: 'otherphysical'},
  {name: 'Other Online Retailer', id: 'otheronline'}
];

@Injectable()
export class RetailerService {

  public getAll$(): Observable<IRetailer[]> {
    return Observable.of(data);
  }

}
