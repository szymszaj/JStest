import { products, users, cart, orders } from "./data.js";

export const getLaptops = () => products.filter((p) => p.category === "laptop");

export const sortByPrice = () =>
  [...products].sort((a, b) => a.price - b.price);

export const getProductsTotal = () =>
  products.reduce((sum, p) => sum + p.price, 0);

export const getUniqueCategories = () => [
  ...new Set(products.map((p) => p.category)),
];

//2
export const getActiveUsers = () => users.filter((u) => u.active);

export const searchUsers = (query) =>
  users.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()));

export const hasAdmin = () => users.some((u) => u.role === "admin");

//3
export const increaseQty = (id) =>
  cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item));

export const removeFromCart = (id) => cart.filter((item) => item.id !== id);

export const getCartTotal = () =>
  cart.reduce((sum, item) => sum + item.price * item.qty, 0);

export const groupOrdersByUser = () =>
  orders.reduce((acc, order) => {
    acc[order.user] ??= [];
    acc[order.user].push(order);
    return acc;
  }, {});
