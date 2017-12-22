import { IAddress } from './address.interface';
import { ISerial } from './serial.interface';
import { IPurchase } from './purchase.interface';

export interface IRegistration {
  firstName: string;
  lastName: string;
  address: IAddress;
  serial: ISerial;
  purchase: IPurchase;
  marketingOptIn: boolean;
  recaptcha: string;
}
