export const isValidPhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
};

export const isValidPassword = (password: string) => {
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

export const isValidEmail = (email: string) => {
  // Regular expression for basic email validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};
