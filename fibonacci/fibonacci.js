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

// Iterative version without using an array
function fibonacciNth(n) {
  if (n <= 0) return 0;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return n === 1 ? a : b;
}
console.log(fibonacciNth(6));

// Function to generate the Fibonacci sequence up to n elements
function fibonacci(n) {
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

// Function to generate the Fibonacci sequence up to n elements with error handling
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

function fibonacci(n, onlyLast = false) {
  if (n <= 0) return onlyLast ? null : [];
  if (n === 1) return onlyLast ? 0 : [0];
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return onlyLast ? seq[n - 1] : seq;
}


console.log(fibonacci(6));      
console.log(fibonacci(6, true)); 