// FUNKCJE PURE (Czyste) vs IMPURE (Nieczyste)

function pureAdd(a, b) {
  return a + b;
}

console.log(pureAdd(2, 3));
console.log(pureAdd(2, 3));

let counter = 0;
function impureIncrement() {
  counter++;
  return counter;
}

console.log(impureIncrement());
console.log(impureIncrement());

const pureAddToArray = (arr, item) => [...arr, item];

const originalArray = [1, 2, 3];
const newArray = pureAddToArray(originalArray, 4);
console.log(originalArray);
console.log(newArray);
