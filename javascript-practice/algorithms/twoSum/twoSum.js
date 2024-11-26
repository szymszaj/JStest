function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));

//2
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

const nums1 = [2, 7, 11, 15, 7, 2];
const target1 = 9;

console.log(allTwoSum(nums1, target1));
