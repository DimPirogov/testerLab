export const validateEmail = (email: string): boolean => {
  let emailPattern: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let valid: boolean = emailPattern.test(email);
  return valid;
}
