export function getAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.some((n) => typeof n !== "number")) {
    throw new TypeError("Argument musi być tablicą liczb");
  }
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}

export function getMax(numbers) {
  if (!Array.isArray(numbers) || numbers.some((n) => typeof n !== "number")) {
    throw new TypeError("Argument musi być tablicą liczb");
  }
  return Math.max(...numbers);
}

export function getMin(numbers) {
  if (!Array.isArray(numbers) || numbers.some((n) => typeof n !== "number")) {
    throw new TypeError("Argument musi być tablicą liczb");
  }
  return Math.min(...numbers);
}

export function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    throw new TypeError("n musi być nieujemną liczbą");
  }
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
