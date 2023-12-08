export const validateEmail = (email: string): boolean => {
  let re: boolean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  return re;
}
