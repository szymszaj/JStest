function simpleOriginalStringCount(word, k) {
  const MOD = 1_000_000_007;
  if (typeof word !== "string" || typeof k !== "number" || k < 0) return 0;
  if (k === 0) return 1;

  function getGroupSizes(str) {
    if (!str) return [];
    const sizes = [];
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) count++;
      else {
        sizes.push(count);
        count = 1;
      }
    }
    sizes.push(count);
    return sizes;
  }

  const groupSizes = getGroupSizes(word);
  if (groupSizes.length < k) return 0;

  const memo = {};
  function countCombinations(idx, left) {
    if (left === 0) return 1;
    if (groupSizes.length - idx < left) return 0;
    const key = `${idx},${left}`;
    if (memo[key] !== undefined) return memo[key];
    let res = 0;
    for (let i = idx; i <= groupSizes.length - left; i++) {
      res = (res + groupSizes[i] * countCombinations(i + 1, left - 1)) % MOD;
    }
    memo[key] = res;
    return res;
  }

  return countCombinations(0, k);
}

console.log(simpleOriginalStringCount("aabbcc", 5));
console.log(simpleOriginalStringCount("aabbcc", 3));
console.log(simpleOriginalStringCount("aaa", 1));
console.log(simpleOriginalStringCount("", 0));
