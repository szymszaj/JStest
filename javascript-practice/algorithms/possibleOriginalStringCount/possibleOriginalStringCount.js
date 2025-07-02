function getGroupLengths(word) {
  const groupLengths = [];
  let count = 1;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) count++;
    else {
      groupLengths.push(count);
      count = 1;
    }
  }
  groupLengths.push(count);
  return groupLengths;
}

function getTotalPossibilities(groupLengths, MOD) {
  return groupLengths.reduce((prod, len) => (prod * len) % MOD, 1);
}

function possibleOriginalStringCount(word, k) {
  const MOD = 1_000_000_007;
  const groupLengths = getGroupLengths(word);
  const totalPossibilities = getTotalPossibilities(groupLengths, MOD);

  const n = groupLengths.length;
  if (n >= k) return totalPossibilities;

  let dp = new Array(k + 1).fill(0);
  dp[0] = 1;
  let dpPrefixSum = Array(k + 2).fill(1);
  dpPrefixSum[0] = 0;

  for (let i = 1; i <= n; i++) {
    dp = new Array(k + 1).fill(0);
    dp[i] = 1;
    for (let j = i + 1; j <= k; j++) {
      const minPick = Math.max(i - 1, j - groupLengths[i - 1]);
      dp[j] = dpPrefixSum[j] - dpPrefixSum[minPick];
      dp[j] = (dp[j] + MOD) % MOD;
    }
    for (let j = 1; j <= k + 1; j++) {
      dpPrefixSum[j] = (dpPrefixSum[j - 1] + dp[j - 1]) % MOD;
    }
  }
  return (totalPossibilities - dpPrefixSum[k] + MOD) % MOD;
}

console.log(possibleOriginalStringCount("aabbcc", 5));
