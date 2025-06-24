function advancedKDistantIndices(nums, key, k) {
  const keyIndices = [];
  const result = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }

  for (const idx of keyIndices) {
    for (let offset = -k; offset <= k; offset++) {
      const pos = idx + offset;
      if (pos >= 0 && pos < nums.length) {
        result.add(pos);
      }
    }
  }

  return Array.from(result).sort((a, b) => a - b);
}
