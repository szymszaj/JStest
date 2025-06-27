function bubbleSort(arr, options = {}) {
  const { descending = false, showSteps = false, compareFn = null } = options;

  let sortedArr = arr.slice();
  let n = sortedArr.length;

  const defaultCompare = (a, b) => (descending ? b - a : a - b);
  const cmp = compareFn || defaultCompare;

  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (cmp(sortedArr[j], sortedArr[j + 1]) > 0) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        swapped = true;
        if (showSteps) {
          console.log(`Step (i=${i}, j=${j}): ${JSON.stringify(sortedArr)}`);
        }
      }
    }
    if (!swapped) break;
  }
  return sortedArr;
}
const numbers = [5, 2, 9, 1, 5, 6];
console.log("Rosnąco:", bubbleSort(numbers));
console.log("Malejąco:", bubbleSort(numbers, { descending: true }));
console.log("Rosnąco ze szczegółami:");
bubbleSort(numbers, { showSteps: true });

const people = [
  { name: "Anna", age: 30 },
  { name: "Piotr", age: 25 },
  { name: "Jan", age: 40 },
];
const sortedPeople = bubbleSort(people, {
  compareFn: (a, b) => a.age - b.age,
  showSteps: true,
});
console.log("Osoby posortowane po wieku:", sortedPeople);
