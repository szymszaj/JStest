function addition(a, b) {
  return a + b;
}
const addition = (a, b) => a + b;

const person = { name: "Alice", age: 22 };
const { name, age } = person;
console.log("Name: " + name + ", Age: " + age);

const name1 = "Jone";
const greeting = `Hello ${name1}!`;
console.log(greeting);

function multiply(x, y) {
  return x * y;
}
const multiplyArrow = (x, y) => x * y;

const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

const hoursWorked = 40;
const hourlyRate = 25;
const weeklyEarnings = `Total earnings: $${hoursWorked * hourlyRate}`;
console.log(weeklyEarnings);
