import { IRegistration } from './registration.interface';
import { IAddress } from './address.interface';
import { ISerial } from './serial.interface';
import { IPurchase } from './purchase.interface';

export class RegistrationCommand implements IRegistration {
  firstName: string;
  lastName: string;
  address: IAddress;
  serial: ISerial;
  purchase: IPurchase;
  marketingOptIn: boolean;
  recaptcha: string;

  constructor(formData: IRegistration) {
    this.firstName = formData.firstName;
    this.lastName = formData.lastName;
    this.marketingOptIn = formData.marketingOptIn;
    this.recaptcha = formData.recaptcha;

    this.address = {
      one: formData.address.one,
      two: formData.address.two,
      city: formData.address.city,
      stateProvince: formData.address.stateProvince,
      zip: formData.address.zip,
      country: formData.address.country,
      email: formData.address.email,
      phone: formData.address.phone
    };
    this.purchase = {
      place: formData.purchase.place,
      other: formData.purchase.other,
      date: formData.purchase.date
    };
    this.serial = {
      prefix: formData.serial.prefix,
      suffix: formData.serial.suffix
    };
  }

  public toJSON() {
    return {
          'firstName': this.firstName,
          'lastName': this.lastName,
          'addressOne': this.address.one,
          'addressTwo': this.address.two,
          'city': this.address.city,
          'state': this.address.stateProvince,
          'zip': this.address.zip,
          'country': this.address.country,
          'email': this.address.email,
          'phone': this.address.phone,
          'purchasePlace': this.purchase.place,
          'purchaseOther': this.purchase.other,
          'purchaseDate': new Date(this.purchase.date.date.year + '-'
           + this.purchase.date.date.month + '-'
           + this.purchase.date.date.day).toISOString(),
          'serialPrefix': this.serial.prefix,
          'serialSuffix': this.serial.suffix,
          'wantsOffers': this.marketingOptIn,
          'captcha': this.recaptcha,
          'source': 'shopify-web'
        };
  }
}

