function minCapability(nums, k) {
  let left = Math.min(...nums),
    right = Math.max(...nums);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    canRobAtLeastK(nums, k, mid) ? (right = mid) : (left = mid + 1);
  }

  return left;
}

function canRobAtLeastK(nums, k, cap) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= cap) {
      count++;
      i++;
    }
  }

  return count >= k;
}

const nums = [2, 3, 5, 9];
const k = 2;
console.log(minCapability(nums, k));
