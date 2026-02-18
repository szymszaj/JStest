const products = [
  { name: "Laptop", price: 1000, quantity: 5 },
  { name: "Mouse", price: 25, quantity: 20 },
  { name: "Keyboard", price: 50, quantity: 10 },
  { name: "Monitor", price: 200, quantity: 3 },
  { name: "USB Cable", price: 10, quantity: 15 },
];

const processedProducts = products
  .filter((product) => product.price > 20)
  .map((product) => ({
    name: product.name,
    value: product.price * product.quantity,
  }))
  .sort((a, b) => b.value - a.value)
  .map((product) => `${product.name}: $${product.value}`);

console.log(processedProducts);
