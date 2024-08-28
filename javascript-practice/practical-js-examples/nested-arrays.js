const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [99, 33, 88],
];
let totalSum = 0;

for (let i = 0; i < nestedArrays.length; i++) {
  for (let j = 0; j < nestedArrays[i].length; j++) {
    totalSum += nestedArrays[i][j];
  }
}

console.log("Total sum:", totalSum);

let dividedByFour = totalSum / 4;
console.log("Divided by 4:", dividedByFour);

console.log("Final result:", dividedByFour);
