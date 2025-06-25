function bubbleSort(arr, options = {}) {
  const { descending = false, showSteps = false, compareFn = null } = options;

  let sortedArr = arr.slice();
  let n = sortedArr.length;

  const defaultCompare = (a, b) => (descending ? b - a : a - b);
  const cmp = compareFn || defaultCompare;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (cmp(sortedArr[j], sortedArr[j + 1]) > 0) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        if (showSteps) {
          console.log(`Step: ${sortedArr.join(", ")}`);
        }
      }
    }
  }
  return sortedArr;
}
