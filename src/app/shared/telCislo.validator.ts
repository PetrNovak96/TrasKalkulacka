import { AbstractControl, FormControl } from '@angular/forms';

export function telCisloValidator(control: FormControl)
  :{[key: string] : any} | null
{
  const OK = /(\+\d{1-3})?(\s\d{3}){3}$/.test(control.value);
  return OK? null : {'nespravneCislo': {value: control.value}};
}
