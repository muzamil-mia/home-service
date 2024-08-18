export const validateEmail = (email) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  if (!isEmailValid) return "Invalid Email";
  return null;
};

export const validatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const hasDigit = /[0-9]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasMinLength = password.length >= 8;

  if (!hasDigit) return "Password should contain at least one digit.";
  if (!hasLower)
    return "Password should contain at least one lowercase letter.";
  if (!hasUpper)
    return "Password should contain at least one uppercase letter.";
  if (!hasMinLength) return "Password should be at least 8 characters long.";
};

export const checkPasswordStrength = (password) => {
  if (password.length === 0) return -1; // Indicate empty password
  if (password.length < 6) return 0;
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[!@#\$%\^&*]/.test(password)) strength++;
  return strength;
};
