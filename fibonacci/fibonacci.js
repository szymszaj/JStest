function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

// Ability to return only the n-th element
function fibonacci_2(n, onlyLast = flase) {
  if (n <= 0) return onlyLast ? null : [];
  if (n === 1) return onlyLast ? 0 : [0];
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return onlyLast ? seq[n - 1] : seq;
}

console.log(fibonacci_2(10));
console.log(fibonacci_2(10, true));

// Recursive version (for the n-th element)
function fibonacciRecursive(n) {
  if (n <= 1) return;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(5));
