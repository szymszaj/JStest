const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((num) => num ** 4);
console.log(squared);

const numbers1 = [10, 20, 30, 40];
const filtered = numbers1.filter((num) => num >= 30);
console.log(filtered);

const numbersMap = [1, 2, 3, 4, 5, 6];
const result = numbersMap
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 10)
  .reduce((acc, num) => acc + num, 0);
console.log(result);

const products = [
  { id: 1, name: "Laptop", price: 5000, inStock: true },
  { id: 2, name: "Myszka", price: 150, inStock: false },
  { id: 3, name: "Monitor", price: 1200, inStock: true },
  { id: 4, name: "Klawiatura", price: 450, inStock: true },
];

const productsSummary = products.map((product) => ({
  id: product.id,
  name: product.name,
  originalPrice: product.price,
  priceWithVAT: parseFloat((product.price * 1.23).toFixed(2)),
  discount: parseFloat((product.price * 0.1).toFixed(2)),
  finalPrice: parseFloat((product.price * 1.23 * 0.9).toFixed(2)),
  status: product.inStock ? "Dostępny" : "Niedostępny",
  badge: product.price > 1000 ? "Premium" : "Standard",
}));

console.log("🛍️ Katalog produktów:");
console.table(productsSummary);

const formattedProducts = products
  .filter((p) => p.inStock)
  .map((product) => ({
    ...product,
    displayPrice: `${(product.price * 1.23).toFixed(2)} zł`,
    html: `<div class="product"><h3>${product.name}</h3><p>${(product.price * 1.23).toFixed(2)} zł</p></div>`,
  }));
