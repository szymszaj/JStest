function maximumSubarraySum(nums, k) {
  let maxSum = 0;
  let currentSum = 0;
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    set.add(nums[i]);

    console.log(`Iteracja ${i}:`);
    console.log(`  Dodano element ${nums[i]}`);
    console.log(`  Bieżąca suma: ${currentSum}`);
    console.log(`  Unikalne elementy: ${Array.from(set)}`);

    if (i >= k) {
      currentSum -= nums[i - k];
      set.delete(nums[i - k]);
      console.log(`  Usunięto element ${nums[i - k]}`);
      console.log(`  Suma po usunięciu: ${currentSum}`);
      console.log(`  Unikalne elementy po usunięciu: ${Array.from(set)}`);
    }

    if (set.size === k) {
      maxSum = Math.max(maxSum, currentSum);
      console.log(
        `  Znaleziono podtablicę o długości ${k} z sumą ${currentSum}`
      );
    }
  }

  console.log(`Maksymalna suma: ${maxSum}`);
  return maxSum;
}

const nums = [4, 2, 4, 5, 6];
const k = 3;

console.log(maximumSubarraySum(nums, k));
