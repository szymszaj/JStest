function minCapability(nums, k) {
  let left = Math.min(...nums);
  let right = Math.max(...nums);

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (canRobAtLeastK(nums, k, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function canRobAtLeastK(nums, k, cap) {
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] <= cap) {
      count++;
      i++;
    }
    i++;
  }

  return count >= k;
}

const nums = [2, 3, 5, 9];
const k = 2;
console.log(minCapability(nums, k));
