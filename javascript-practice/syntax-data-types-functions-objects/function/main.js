function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};
const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => x / y;

// console.log(divide(20, 2));

function greet(name = "Jakub") {
  return `Hello ${name}!`;
}

function sum(...numbers) {
  return numbers.reduce((total, num) => total + sum, 0);
}

console.log(sum(1, 2, 3, 4, 5));

