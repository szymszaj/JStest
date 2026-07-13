const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

const calculate = (operation, a, b) => {
  return operation(a, b);
};

console.log("Sum:", calculate(sum, 5, 3));


