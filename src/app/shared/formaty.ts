export function formatujCislo(neco: number)
  : string
{
  return  neco.
  toString().
  replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export function formatujString(neco: string)
  : number
{
  return Number(neco.replace(/\D/g, ""));
}
