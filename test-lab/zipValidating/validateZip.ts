export const validateZip = (zip: string): boolean => {
  let notNumber: boolean = isNaN(parseInt(zip));
  if((zip.length > 4 && zip.length < 6)&&(!notNumber))
    return true;
  else
    return false;
}
