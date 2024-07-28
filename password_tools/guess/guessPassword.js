function guessPassword(targetPassword) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const maxAttempts = 1000000000;
  let attempts = 0;

  function generateNextPassword(currentPassword) {
    const charsetLength = charset.length;
    let nextPassword = currentPassword;
    let i = currentPassword.length - 1;

    while (i >= 0) {
      const currentCharIndex = charset.indexOf(currentPassword[i]);
      if (currentCharIndex < charsetLength - 1) {
        nextPassword =
          nextPassword.substring(0, i) +
          charset[currentCharIndex + 1] +
          nextPassword.substring(i + 1);
        break;
      } else {
        nextPassword =
          nextPassword.substring(0, i) +
          charset[0] +
          nextPassword.substring(i + 1);
        i--;
      }
    }

    return nextPassword;
  }

  let currentPassword = charset[0].repeat(targetPassword.length);

  while (currentPassword !== targetPassword && attempts < maxAttempts) {
    currentPassword = generateNextPassword(currentPassword);
    attempts++;
  }

  if (currentPassword === targetPassword) {
    console.log(`Password guessed: ${currentPassword}`);
  } else {
    console.log("Failed to guess the password within the maximum attempts.");
  }
}
