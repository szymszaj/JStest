function getEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const getEvenNew = (arr) => arr.filter((num) => num % 2 === 0);

console.log(getEven([1, 2, 3, 4, 5, 6]));
console.log(getEvenNew([1, 2, 3, 4, 5, 6]));


