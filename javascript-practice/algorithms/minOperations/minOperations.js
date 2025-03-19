function minOperationsImmutable(nums) {
  let arr = [...nums];
  let n = arr.length;
  if (n < 3) return arr.every((num) => num === 1) ? 0 : -1;

  let operations = 0;

  for (let i = 0; i < n - 2; i++) {
    if (arr[i] === 0) {
      arr[i] = 1;
      arr[i + 1] = 1 - arr[i + 1];
      arr[i + 2] = 1 - arr[i + 2];
      operations++;
    }
  }

  return arr[n - 1] === 1 && arr[n - 2] === 1 ? operations : -1;
}

let nums = [0, 1, 0, 1, 0];
console.log(minOperationsImmutable(nums));
console.log(nums);
