function pivotArray(nums, pivot) {
  const less = [];
  const high = [];
  let count = 0;

  for (const num of nums) {
    if (num < pivot) less.push(num);
    else if (num === pivot) count++;
    else high.push(num);
  }

  const result = new Array(nums.length);
  let index = 0;

  for (const num of less) result[index++] = num;
  for (let i = 0; i < count; i++) result[index++] = pivot;
  for (const num of high) result[index++] = num;

  return result;
}

const nums = [9, 12, 3, 5, 14, 10, 10];
const pivot = 10;
console.log(pivotArray(nums, pivot));
