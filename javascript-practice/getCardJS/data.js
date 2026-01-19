export const products = [
  { id: 1, name: "MacBook Pro", price: 8999, category: "laptop", rating: 4.8 },
  { id: 2, name: "iPhone 15", price: 4999, category: "phone", rating: 4.6 },
  { id: 3, name: "Dell XPS", price: 7999, category: "laptop", rating: 4.7 },
  { id: 4, name: "Samsung S24", price: 4599, category: "phone", rating: 4.5 },
];

export const users = [
  { id: 1, name: "Anna", role: "admin", active: true },
  { id: 2, name: "Kasia", role: "user", active: false },
  { id: 3, name: "Tomek", role: "user", active: true },
  { id: 4, name: "Piotr", role: "moderator", active: true },
];

export const cart = [
  { id: 1, name: "MacBook Pro", price: 8999, qty: 1 },
  { id: 2, name: "iPhone 15", price: 4999, qty: 2 },
];

export const orders = [
  { id: 1, user: "Anna", status: "pending" },
  { id: 2, user: "Tomek", status: "completed" },
  { id: 3, user: "Anna", status: "completed" },
];
