export const primeCheck = (testNumber: number) : boolean => {
  if(testNumber > 1){
    for(let i = 2; i < testNumber; i++){
      if(testNumber %i === 0){
        return false;
      }
    }
    return true;
  }
  else
    return false;
}
