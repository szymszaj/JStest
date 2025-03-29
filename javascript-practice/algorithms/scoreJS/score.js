function getMaxScore(arr, operations) {
  const len = arr.length;
  const values = [...arr];
  const maxVal = Math.max(...arr);

  const primeCount = calculatePrimeScores(maxVal);
  const leftBound = new Array(len).fill(0);
  const rightBound = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (
      stack.length > 0 &&
      primeCount[values[stack[stack.length - 1]]] < primeCount[values[i]]
    ) {
      stack.pop();
    }
    leftBound[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack.length = 0;
  for (let i = len - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      primeCount[values[stack[stack.length - 1]]] <= primeCount[values[i]]
    ) {
      stack.pop();
    }
    rightBound[i] = stack.length === 0 ? len - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  const frequency = new Array(len);
  for (let i = 0; i < len; i++) {
    frequency[i] = leftBound[i] * rightBound[i];
  }

  const sortedArray = values
    .map((num, idx) => ({ num, freq: frequency[idx] }))
    .sort((a, b) => b.num - a.num);

  let index = 0;
  let score = 1;
  const MODULO = 1000000007;

  while (operations > 0) {
    const minCount = Math.min(sortedArray[index].freq, operations);
    score =
      (score * powerMod(sortedArray[index].num, minCount, MODULO)) % MODULO;
    operations -= minCount;
    index++;
  }

  return score;
}

function calculatePrimeScores(limit) {
  const primeCounts = new Array(limit + 1).fill(0);
  for (let i = 2; i <= limit; i++) {
    if (primeCounts[i] !== 0) continue;
    for (let j = i; j <= limit; j += i) {
      primeCounts[j]++;
    }
  }
  return primeCounts;
}

function powerMod(base, exp, mod) {
  let result = 1;
  base %= mod;
  while (exp > 0) {
    if (exp & 1) result = (result * base) % mod;
    base = (base * base) % mod;
    exp >>= 1;
  }
  return result;
}
