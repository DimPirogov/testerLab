export const roundPrice = (amount: number, valuta?: string): string => {
  let pattern = /%PRICE%/
  const roundUp = (Math.ceil(amount*100)/100).toFixed(2);
  if(valuta && pattern.test(valuta)){
    if(valuta === '%PRICE% kr')
      return `${roundUp} kr`;
    else if(valuta == '$%PRICE%')
      return `$${roundUp}`;
    else
      return `USD ${roundUp}`;
  }
  else{
    valuta = valuta || 'SEK';
    return `${roundUp} ${valuta}`;
  }
}
