function maximumScore(nums, k) {
  const n = nums.length;
  const numArr = [...nums];
  const maxNum = Math.max(...nums);

  const primeScores = primeScoresSieve(maxNum);
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      primeScores[numArr[stack[stack.length - 1]]] < primeScores[numArr[i]]
    ) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      primeScores[numArr[stack[stack.length - 1]]] <= primeScores[numArr[i]]
    ) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  const freq = new Array(n);
  for (let i = 0; i < n; i++) {
    freq[i] = left[i] * right[i];
  }

  const sorted = numArr
    .map((value, index) => ({ value, freq: freq[index] }))
    .sort((a, b) => b.value - a.value);

  let currentIndex = 0;
  let maximumScore = 1;
  const MOD = 1000000007;

  while (k > 0) {
    const minFreq = Math.min(sorted[currentIndex].freq, k);
    maximumScore =
      (maximumScore * modPow(sorted[currentIndex].value, minFreq, MOD)) % MOD;
    k -= minFreq;
    currentIndex++;
  }

  return maximumScore;
}

function primeScoresSieve(num) {
  const primeScores = new Array(num + 1).fill(0);
  for (let i = 2; i <= num; i++) {
    if (primeScores[i] !== 0) continue;
    for (let j = i; j <= num; j += i) {
      primeScores[j]++;
    }
  }
  return primeScores;
}

function modPow(value, exponent, modulus) {
  let result = 1;
  value %= modulus;
  while (exponent > 0) {
    if (exponent & 1) result = (result * value) % modulus;
    value = (value * value) % modulus;
    exponent >>= 1;
  }
  return result;
}
