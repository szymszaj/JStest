function minimumOperationsToMakeUnique(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array");
  }

  if (nums.length <= 1) {
    return 0;
  }

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

function minimumOperationsToMakeUniqueAlt(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array");
  }

  const frequency = nums.reduce((map, num) => {
    map.set(num, (map.get(num) || 0) + 1);
    return map;
  }, new Map());
}
