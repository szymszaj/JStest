const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((num) => num ** 4);
console.log(squared);

const numbers1 = [10, 20, 30, 40];
const filtered = numbers1.filter((num) => num >= 30);
console.log(filtered);

const numbersMap = [1, 2, 3, 4, 5, 6];
const result = numbersMap
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 10)
  .reduce((acc, num) => acc + num, 0);
console.log(result);
