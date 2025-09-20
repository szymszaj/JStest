function fibonacciWithErrorHandling(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("n must be a non-negative integer");
  }
  if (n === 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}
module.exports = fibonacciWithErrorHandling;
