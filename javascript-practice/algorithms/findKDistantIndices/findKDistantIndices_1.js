function findKDistantIndices(nums, key, k) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === key && Math.abs(i - j) <= k) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}
