const products = [
  { name: "PC", price: 1200, inStock: true },
  { name: "Smartphone", price: 800, inStock: false },
  { name: "Tablet", price: 400, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Headphones", price: 200, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
];
const discountedProducts = products.map((products) => ({
  ...products,
  price: products.price * 0.7,
}));
const inStockProducts = discountedProducts.filter((product) => product.inStock);

console.log("Products after discount:", discountedProducts);
console.log("Products in stock:", inStockProducts);
