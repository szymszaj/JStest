export const cart = [
  { id: 1, name: "iPhone 15", price: 4999, quantity: 1 },
  { id: 2, name: "Etui", price: 89, quantity: 2 },
  { id: 3, name: "Ładowarka", price: 149, quantity: 1 },
  { id: 4, name: "Słuchawki", price: 299, quantity: 1 },
];

export const COUPONS = {
  SAVE10: { type: "percent", value: 10, label: "10% od całości" },
  SAVE50: { type: "fixed", value: 50, label: "50 zł od całości" },
  TECH20: {
    type: "percent",
    value: 20,
    label: "20% tylko na produkty >200 zł",
    filter: (item) => item.price > 200,
  },
};
