import { FormControl } from '@angular/forms';

export function telCisloValidator(control: FormControl)
  :{[key: string] : any} | null
{
  const OK = /^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/.test(control.value);
  return OK? null : {'nespravneCislo': {value: control.value}};
}
