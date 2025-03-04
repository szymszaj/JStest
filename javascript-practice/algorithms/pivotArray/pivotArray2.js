function pivotArray(nums, pivot) {
  const less = [];
  const equal = [];
  const greater = [];

  for (const num of nums) {
    if (num < pivot) less.push(num);
    else if (num === pivot) equal.push(num);
    else greater.push(num);
  }

  const result = [...less, ...equal, ...greater];
  const counts = {
    less: less.length,
    equal: equal.length,
    greater: greater.length,
  };

  return { result, counts };
}

const nums = [9, 12, 3, 5, 14, 10, 10];
const pivot = 10;
const { result, counts } = pivotArray(nums, pivot);
console.log("Pivoted Array:", result);
console.log("Counts:", counts);
