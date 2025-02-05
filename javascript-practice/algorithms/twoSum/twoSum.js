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

const nums1 = [2, 7, 11, 15, 7, 2];
const target1 = 9;

console.log(allTwoSum(nums1, target1));
