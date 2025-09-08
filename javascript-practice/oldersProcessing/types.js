export const orders = [
  {
    orderId: 1,
    user: "Anna",
    status: "shipped",
    products: [
      { name: "Keyboard", quantity: 2, price: 120 },
      { name: "Mouse", quantity: 1, price: 60 },
    ],
  },
  {
    orderId: 2,
    user: "Bartek",
    status: "pending",
    products: [{ name: "Monitor", quantity: 1, price: 700 }],
  },
  {
    orderId: 3,
    user: "Celina",
    status: "shipped",
    products: [
      { name: "Laptop", quantity: 1, price: 3000 },
      { name: "Mouse", quantity: 2, price: 60 },
    ],
  },
  {
    orderId: 4,
    user: "Darek",
    status: "cancelled",
    products: [{ name: "Chair", quantity: 1, price: 300 }],
  },
];
