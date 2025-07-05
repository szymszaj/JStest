function simpleOriginalStringCount(word, k) {
  const MOD = 1_000_000_007;
  if (typeof word !== "string" || typeof k !== "number" || k < 0) return 0;
  if (k === 0) return 1;

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
  if (word.length > 0) groupSizes.push(currentCount);

  if (groupSizes.length < k) return 0;

  const memo = {};
  function productOfCombination(arr, k, start = 0) {
    const key = `${k},${start}`;
    if (memo[key] !== undefined) return memo[key];
    if (k === 0) return 1;
    let result = 0;
    for (let i = start; i <= arr.length - k; i++) {
      let prod = arr[i] * productOfCombination(arr, k - 1, i + 1);
      result = (result + (prod % MOD)) % MOD;
    }
    memo[key] = result;
    return result;
  }

  return productOfCombination(groupSizes, k);
}
