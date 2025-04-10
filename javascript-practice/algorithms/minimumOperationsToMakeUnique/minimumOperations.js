function minimumOperations(nums) {
  const set = new Set();
  let operations = 0;

  for (let j = nums.length - 1; j >= 0; j--) {
    if (!set.has(nums[j])) {
      set.add(nums[j]);
    } else {
      return Math.floor((j + 3) / 3);
    }
  }

  return 0;
}
