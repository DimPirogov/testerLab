export const roundPrice = (amount: number, valuta?: string): string => {
  let pattern: RegExp = /%PRICE%/;
  const roundUpAndAdd2Decimals = (Math.ceil(amount*100)/100).toFixed(2);
  if(valuta && pattern.test(valuta)){
    if(valuta === '%PRICE% kr')
      return `${roundUpAndAdd2Decimals} kr`;
    else if(valuta === '$%PRICE%')
      return `$${roundUpAndAdd2Decimals}`;
    else
      return `USD ${roundUpAndAdd2Decimals}`;
  }
  else{
    valuta = valuta || 'SEK';
    return `${roundUpAndAdd2Decimals} ${valuta}`;
  }
}
