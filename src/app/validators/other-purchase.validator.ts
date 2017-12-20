import { AbstractControl } from '@angular/forms';

export function OtherPurchasePlaceValidator(formGroup: AbstractControl): {[key: string]: boolean} {
  const place = formGroup.get('place').value;
  const other = formGroup.get('other').value;

  if (place && place.indexOf('Other') > -1 && !other) {
    return {required: true};
  }
  return null;
}
