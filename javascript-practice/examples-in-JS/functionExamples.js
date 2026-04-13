function greet(name) {
  return `Cześć, ${name}!`;
}
console.log(greet("Anna"));

const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3));

const multiply = (a, b) => a * b;
console.log(multiply(4, 2));

function divide(a, b = 1) {
  return a / b;
}
console.log(divide(10, 2));
console.log(divide(10));

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

const numbers = [1, 2, 3];
numbers.forEach(function (num) {
  console.log(num * 2);
});
