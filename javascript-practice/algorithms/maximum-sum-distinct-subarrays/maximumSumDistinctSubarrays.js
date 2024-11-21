function maximumSubarraySum(nums, k) {
  let maxSum = 0;
  let currentSum = 0;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (i >= k) {
      currentSum -= nums[i - k];
      if (map.get(nums[i - k]) === 1) {
        map.delete(nums[i - k]);
      } else {
        map.set(nums[i - k], map.get(nums[i - k]) - 1);
      }
    }

    if (map.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

const nums = [4, 2, 4, 5, 6];
const k = 3;

console.log(maximumSubarraySum(nums, k));
