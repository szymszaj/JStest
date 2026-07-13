const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

const calculate = (operation, a, b) => {
  return operation(a, b);
};

console.log("Sum:", calculate(sum, 5, 3));

const handleOrder = (product, sell = 0) => {
  const sum = product.reduce((acc, p) => acc + p.price * p.quantity, 0);
  return sum - sell;
};
