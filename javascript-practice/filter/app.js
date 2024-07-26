const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((num) => num % 2 === 0);
const greaterThanFive = numbers.filter((num) => num > 5);

console.log(evens);
console.log(greaterThanFive);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 17, isActive: false },
  { name: "Charlie", age: 30, isActive: true },
  { name: "Dave", age: 22, isActive: false },
  { name: "Eve", age: 18, isActive: true },
  { name: "Frank", age: 29, isActive: true },
  { name: "Grace", age: 19, isActive: false },
  { name: "Hank", age: 35, isActive: true },
];

function isActiveAndAdult(user) {
  return user.isActive && user.age > 18;
}

const activeAdults = users.filter(isActiveAndAdult);

console.log(activeAdults);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20];

function isEvenAndMultipleOfTwo(number) {
  return number % 2 === 0 && number % 2 === 0;
}

const evenMultiplesOfTwo = numbers.filter(isEvenAndMultipleOfTwo);

console.log(evenMultiplesOfTwo);
