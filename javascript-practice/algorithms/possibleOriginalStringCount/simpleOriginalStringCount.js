function simpleOriginalStringCount(word, k) {
  const MOD = 1_000_000_007;
  let groupSizes = [];
  let currentCount = 1;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      currentCount++;
    } else {
      groupSizes.push(currentCount);
      currentCount = 1;
    }
  }
  groupSizes.push(currentCount);

  if (groupSizes.length >= k) {
    return groupSizes.reduce((result, size) => (result * size) % MOD, 1);
  }

  return 0;
}

console.log(simpleOriginalStringCount("aabbcc", 5));
