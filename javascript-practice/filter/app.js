const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((num) => num % 2 === 0);
const greaterThanFive = numbers.filter((num) => num > 5);

console.log(evens);
console.log(greaterThanFive);
