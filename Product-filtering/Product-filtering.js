const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 599,
    brand: "Nike",
    size: 42,
    inStock: true,
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 699,
    brand: "Adidas",
    size: 43,
    inStock: true,
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 449,
    brand: "Puma",
    size: 42,
    inStock: false,
  },
  {
    id: 4,
    name: "Nike Pegasus",
    price: 529,
    brand: "Nike",
    size: 44,
    inStock: true,
  },
  {
    id: 5,
    name: "Adidas NMD",
    price: 599,
    brand: "Adidas",
    size: 42,
    inStock: true,
  },
];

const filters = {
  brands: ["Nike", "Adidas"],
  priceMax: 600,
  size: 42,
  inStockOnly: true,
};

const filteredProducts = products
  .filter((p) => filters.brands.includes(p.brand))
  .filter((p) => p.price <= filters.priceMax)
  .filter((p) => p.size === filters.size)
  .filter((p) => !filters.inStockOnly || p.inStock);

console.log("Znalezione produkty:", filteredProducts);
