function pivotArray(nums, pivot) {
  const less = [];
  const equal = [];
  const greater = [];

  for (const num of nums) {
    if (num < pivot) less.push(num);
    else if (num === pivot) equal.push(num);
    else greater.push(num);
  }

  return [...less, ...equal, ...greater];
}

const nums = [9, 12, 3, 5, 14, 10, 10];
const pivot = 10;
console.log(pivotArray(nums, pivot));
