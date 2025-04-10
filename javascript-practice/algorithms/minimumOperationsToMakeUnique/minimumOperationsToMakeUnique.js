function minimumOperationsToMakeUnique(nums) {
  const seen = new Set();
  let duplicates = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen.has(nums[i])) {
      duplicates++;
    } else {
      seen.add(nums[i]);
    }
  }

  return duplicates;
}
