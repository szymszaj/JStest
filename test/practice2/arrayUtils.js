export function getUnique(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Argument musi być tablicą");
  return [...new Set(arr)];
}

export function chunkArray(arr, size) {
  if (!Array.isArray(arr)) throw new TypeError("Argument musi być tablicą");
  if (typeof size !== "number" || size <= 0)
    throw new TypeError("size musi być liczbą dodatnią");
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function flattenArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Argument musi być tablicą");
  return arr.reduce((acc, val) => acc.concat(val), []);
}

export function shuffleArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Argument musi być tablicą");
  return [...arr].sort(() => Math.random() - 0.5);
}
