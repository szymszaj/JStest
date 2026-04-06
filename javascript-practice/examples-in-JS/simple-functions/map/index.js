// Stałe
const VAT_RATE = 1.23;
const DISCOUNT_RATE = 0.1;
const PRICE_PREMIUM_THRESHOLD = 1000;
const DECIMAL_PLACES = 2;

// Funkcje pomocnicze
const formatPrice = (price) => parseFloat((price * VAT_RATE).toFixed(DECIMAL_PLACES));
const round = (num) => parseFloat(num.toFixed(DECIMAL_PLACES));
const getPriceWithVAT = (price) => round(price * VAT_RATE);
const getDiscount = (price) => round(price * DISCOUNT_RATE);
const getFinalPrice = (price) => round(price * VAT_RATE * (1 - DISCOUNT_RATE));

// Przykłady map/filter/reduce
console.log("Map - podniesienie do potęgi:");
console.log([1, 2, 3, 4, 5].map((num) => num ** 4));

console.log("\nFilter - liczby >= 30:");
console.log([10, 20, 30, 40].filter((num) => num >= 30));

console.log("\nChaining - suma parzystych liczb do potęgi 10:");
console.log(
  [1, 2, 3, 4, 5, 6]
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 10)
    .reduce((acc, num) => acc + num, 0)
);

// Dane produktów
const products = [
  { id: 1, name: "Laptop", price: 5000, inStock: true },
  { id: 2, name: "Myszka", price: 150, inStock: false },
  { id: 3, name: "Monitor", price: 1200, inStock: true },
  { id: 4, name: "Klawiatura", price: 450, inStock: true },
];

// Podsumowanie produktów
const productsSummary = products.map((product) => ({
  id: product.id,
  name: product.name,
  originalPrice: product.price,
  priceWithVAT: getPriceWithVAT(product.price),
  discount: getDiscount(product.price),
  finalPrice: getFinalPrice(product.price),
  status: product.inStock ? "Dostępny" : "Niedostępny",
  badge: product.price > PRICE_PREMIUM_THRESHOLD ? "Premium" : "Standard",
}));

console.log("\nKatalog produktów:");
console.table(productsSummary);

// Produkty dostępne sformatowane
const priceStr = (price) => `${formatPrice(price)} zł`;
const formattedProducts = products
  .filter((p) => p.inStock)
  .map((product) => ({
    ...product,
    displayPrice: priceStr(product.price),
    html: `<div class="product"><h3>${product.name}</h3><p>${priceStr(product.price)}</p></div>`,
  }));

console.log("\nProdukty dostępne:");
formattedProducts.forEach((p) => console.log(`${p.name}: ${p.displayPrice}`));
