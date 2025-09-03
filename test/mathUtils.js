function getAverage(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}

function getMax(numbers) {
  return Math.max(...numbers);
}

function getMin(numbers) {
  return Math.min(...numbers);
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  getAverage,
  getMax,
  getMin,
  factorial,
};
