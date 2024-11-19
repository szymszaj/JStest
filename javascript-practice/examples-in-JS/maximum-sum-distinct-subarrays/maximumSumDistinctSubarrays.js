function maximumSubarraySum(nums, k) {
  let maxSum = 0;
  let currentSum = 0;
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    set.add(nums[i]);

    if (i >= k) {
      currentSum -= nums[i - k];
      set.delete(nums[i - k]);
    }

    if (set.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

const nums = [4, 2, 4, 5, 6];
const k = 3;

console.log(maximumSubarraySum(nums, k));
