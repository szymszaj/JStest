function minOperations(nums) {
  let n = nums.length;
  let operations = 0;

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] = 1 - nums[i + 1];
      nums[i + 2] = 1 - nums[i + 2];
      operations++;
    }
  }

  return nums[n - 1] === 1 && nums[n - 2] === 1 ? operations : -1;
}

console.log(minOperations([0, 1, 0, 1, 0]));
console.log(minOperations([1, 1, 1, 1]));
console.log(minOperations([0, 0, 0]));
