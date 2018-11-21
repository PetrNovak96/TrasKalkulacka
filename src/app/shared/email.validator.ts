import { AbstractControl, FormControl } from '@angular/forms';

export function emailValidator(control: FormControl)
:{[key: string] : any} | null
{
  const OK = /([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$/.test(control.value);
  return OK? null : {'nespravnyEmail': {value: control.value}};
}
