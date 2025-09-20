function fibonacciNth(n) {
  if (n <= 0) return 0;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return n === 1 ? a : b;
}
module.exports = fibonacciNth;
