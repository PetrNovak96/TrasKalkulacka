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

export function naProcenta(neco: number) {
  return  (neco * 100).
  toFixed(2).
  toString().
  replace(/\./g, ",") + " %";
}

export function telefonFiltr(neco: string) {
  let novy = "";

  neco = neco.replace(/\+420\s|\+420|\+42|\+4|\+/, "");


  for (var x = 0; x < neco.length; x++)
  {
    var c = neco.charAt(x);

    if(c.match(/\s|\d/)) {
      novy = novy + c;
    }

  }

  neco = "+420 " + novy;

  return neco.replace(/(\d{3})(\d)/g, "$1 $2");
}

export function bezCislic(neco: string) {
  let novy = "";

  for (var x = 0; x < neco.length; x++)
  {
    var c = neco.charAt(x);
    if (c.match(/L/)) {console.log(neco.charCodeAt(x))}

    if(c.match(/\D/)) {
      novy = novy + c;
    }
  }
//[a-zA-Z]|ě|š|č|ř|ž|ý|á|í|é|ó|ů|ú|Ě|Š|Č|Ř|Ž|Ý|Á|Í|É|
  return novy;
}
