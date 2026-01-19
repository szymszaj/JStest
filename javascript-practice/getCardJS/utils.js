import { products, users, cart, orders } from "./data.js";

export const getLaptops = () => products.filter((p) => p.category === "laptop");

export const sortByPrice = () =>
  [...products].sort((a, b) => a.price - b.price);

export const getProductsTotal = () =>
  products.reduce((sum, p) => sum + p.price, 0);

export const getUniqueCategories = () => [
  ...new Set(products.map((p) => p.category)),
];
