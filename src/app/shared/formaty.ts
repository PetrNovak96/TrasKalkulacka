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

export function filtrNepovoleneZnaky(neco: string) {
  let novy = "";
  let pole = ['A', 'B','C','Č','D','Ď','E','F','G','H','CH',
    'I','J','K','L','M','N','Ň','O','P','Q','R','S','T','Ť','U',
    'V','W','X','Y','Z','Ě','Š','Č','Ř','Ž','Ý','Á','Í','É',
    'Ú','Ů','Ë','Ü','Ö','Ï','Ä','Ÿ','a','b','c','č','d','ď','e',
    'f','g','h','ch','i','j','k','l','m','n','ň','o','p','q','r',
    's','t','ť','u','v','w','x','y','z','ě','š','č','ř','ž','ý',
    'á','í','é','ú','ů','ë','ü','ö','ï','ä','ÿ'];

  for (var x = 0; x < neco.length; x++)
  {
    var c = neco.charAt(x);

    for(var y = 0; y < pole.length; y++){
      if (c == pole[y]) {
        novy = novy + c;
        break;
      }
    }
  }
  console.log(novy)
  return novy;
}
