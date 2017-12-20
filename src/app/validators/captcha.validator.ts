import { AbstractControl } from '@angular/forms';

export function RecaptchaValidator(control: AbstractControl) {
  if (!control.value) {
    return { resolved: true };
  }
  return null;
}
