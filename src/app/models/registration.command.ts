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
      zip: formData.address.stateProvince,
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
        'ProductRegistration' : {
          'first_name': this.firstName,
          'last_name': this.lastName,
          'address_1': this.address.one,
          'address_2': this.address.two,
          'city': this.address.city,
          'state': this.address.stateProvince,
          'zip': this.address.zip,
          'country': this.address.country,
          'email': this.address.email,
          'phone': this.address.phone,
          'purchase_place': this.purchase.place,
          'specify_other': this.purchase.other,
          'purchase_date': this.purchase.date.date.year + '-' + this.purchase.date.date.month + '-' + this.purchase.date.date.day,
          'serial_prefix': this.serial.prefix,
          'serial_suffix': this.serial.suffix,
          'wants_offers': this.marketingOptIn,
          'captcha': this.recaptcha,
          'source': 'shopify-web'
      }
    };
  }
}

