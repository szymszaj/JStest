export function capitalize(text) {
  if (typeof text !== "string")
    throw new TypeError("Argument musi być stringiem");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function reverse(text) {
  if (typeof text !== "string")
    throw new TypeError("Argument musi być stringiem");
  return text.split("").reverse().join("");
}

export function isPalindrome(text) {
  if (typeof text !== "string")
    throw new TypeError("Argument musi być stringiem");
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

export function countWords(text) {
  if (typeof text !== "string")
    throw new TypeError("Argument musi być stringiem");
  return text.trim().split(/\s+/).length;
}
