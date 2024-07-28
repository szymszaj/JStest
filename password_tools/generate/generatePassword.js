function generatePassword() {
  const length = 14;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

function generateUniquePassword(existingPasswords) {
  let password;
  do {
    password = generatePassword();
  } while (existingPasswords.has(password));
  existingPasswords.add(password);
  return password;
}

const existingPasswords = new Set();
for (let i = 0; i < 5; i++) {
  const newPassword = generateUniquePassword(existingPasswords);
  console.log(newPassword);
}
