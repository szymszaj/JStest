const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const sumOfEvenNumbers = evenNumbers.reduce((sum, number) => sum + number, 0);

console.log("Even numbers", evenNumbers);
console.log("Sum of even numbers", sumOfEvenNumbers);
