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

const handleOrderWithDiscount = (product, sell = 0, discount = 0) => {
  const sum = product.reduce((acc, p) => acc + p.price * p.quantity, 0);
  return sum - sell - discount;
};

console.log(
  "Total Order:",
  handleOrder(
    [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 },
    ],
    5,
  ),
);
console.log(
  "Total Order with Discount:",
  handleOrderWithDiscount(
    [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 },
    ],
    5,
    2,
  ),
);
