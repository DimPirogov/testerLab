export const validateZip = (zip: string): boolean => {
  if((zip.length > 4 && zip.length < 6)&&(!isNaN(parseInt(zip)))){
    return true;
  }
  else
    return false;
}
