// FUNKCJE DO WALIDACJI

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid-email"));

console.log(validatePassword("haslo123"));
console.log(validatePassword("short"));

const validatePhoneNumber = (phone) => {
  const regex = /^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/;
  return regex.test(phone);
};

console.log(validatePhoneNumber("123-456-789"));
console.log(validatePhoneNumber("+48 123 456 789"));
console.log(validatePhoneNumber("12345"));
