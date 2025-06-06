function allTwoSum(nums, target) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      result.push([map.get(complement), i]);
    }
    map.set(nums[i], i);
  }
  return result;
}

const nums = [2, 7, 11, 15, 7, 2];
const target = 9;

console.log(allTwoSum(nums, target));

function allTwoSum(nums, target) {
  const map = new Map();
  const result = [];

  nums.forEach((num, i) => {
    const complement = target - num;
    if (map.has(complement)) {
      result.push([map.get(complement), i]);
    }
    map.set(num, i);
  });

  return result;
}

const nums2 = [1, 5, 3, 4, 2, 3, 6];
const target2 = 6;

console.log(allTwoSum(nums2, target2));
