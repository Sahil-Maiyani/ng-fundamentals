import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {
  validate(control: FormGroup): ValidationErrors {
    let addressControl = control.controls['address'];
    let cityControl = control.controls['city'];
    let countryControl = control.controls['country'];
    let onlineUrlControl = (control.root as FormGroup).controls['onlineUrl'];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    }

    return { validateLocation: false };
  }
}
