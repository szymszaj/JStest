const cart = [
  { id: 1, name: "iPhone 15", price: 4999, quantity: 1 },
  { id: 2, name: "Etui", price: 89, quantity: 2 },
  { id: 3, name: "Ładowarka", price: 149, quantity: 1 },
  { id: 4, name: "Słuchawki", price: 299, quantity: 1 },
];

const totalPrice = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);

const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

const withDiscount = cart.map((item) => ({
  ...item,
  discount: item.price > 200 ? item.price * 0.1 : 0,
  finalPrice: item.price > 200 ? item.price * 0.9 : item.price,
}));
