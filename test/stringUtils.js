function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverse(text) {
  return text.split("").reverse().join("");
}

function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

module.exports = {
  capitalize,
  reverse,
  isPalindrome,
  countWords,
};
