const products = [
  { name: "Laptop", price: 1000, quantity: 5 },
  { name: "Mouse", price: 25, quantity: 20 },
  { name: "Keyboard", price: 50, quantity: 10 },
  { name: "Monitor", price: 200, quantity: 3 },
  { name: "USB Cable", price: 10, quantity: 15 },
];

const filterByPrice = (products, minPrice) =>
  products.filter((product) => product.price > minPrice);

const calculateProductValue = (products) =>
  products.map((product) => ({
    name: product.name,
    value: product.price * product.quantity,
  }));

const sortByValueDescending = (products) =>
  products.sort((a, b) => b.value - a.value);

const formatProducts = (products) =>
  products.map((product) => `${product.name}: $${product.value}`);

const processedProducts = formatProducts(
  sortByValueDescending(calculateProductValue(filterByPrice(products, 20)))
);

console.log(processedProducts);
