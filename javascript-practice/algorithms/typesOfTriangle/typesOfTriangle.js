function typeOfTriangle(nums) {
  if (
    nums[0] + nums[1] <= nums[2] ||
    nums[2] + nums[1] <= nums[0] ||
    nums[2] + nums[0] <= nums[1]
  ) {
    return "none";
  }

  if (nums[0] === nums[1] && nums[2] === nums[1]) {
    return "equilateral";
  }

  if (nums[0] === nums[1] || nums[2] === nums[1] || nums[2] === nums[0]) {
    return "isosceles";
  }

  return "scalene";
}

console.log(typeOfTriangle([3, 3, 3]));
console.log(typeOfTriangle([3, 4, 5]));
console.log(typeOfTriangle([3, 3, 2]));
console.log(typeOfTriangle([1, 2, 3]));
