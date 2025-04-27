function countSubarrays(nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 1; i < n - 1; ++i) {
    if (nums[i] === (nums[i - 1] + nums[i + 1]) * 2) {
      ++ans;
    }
  }
  return ans;
}

const nums = [1, 4, 1, 6, 1];
console.log(countSubarrays(nums));
