export function numberToString(neco: number)
  : string
{
  return  neco.
  toString().
  replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export function stringToNumber(neco: string)
  : number
{
  return Number(neco.replace(/\D/g, ""));
}
