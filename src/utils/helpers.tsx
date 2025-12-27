export const isValidPhoneNumber = (phoneNumber: string) => {
  // Regular expression for basic phone number validation (10 digits)
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
};

export const isValidPassword = (password: string) => {
  // Regular expressions for password validation
  const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const numberRegex = /[0-9]/;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  return (
    password.length >= 8 &&
    symbolRegex.test(password) &&
    numberRegex.test(password) &&
    upperCaseRegex.test(password) &&
    lowerCaseRegex.test(password)
  );
};
