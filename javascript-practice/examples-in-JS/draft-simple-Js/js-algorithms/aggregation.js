const sales = [
  { category: "Electronics", amount: 200 },
  { category: "Furniture", amount: 150 },
  { category: "Electronics", amount: 300 },
  { category: "Clothing", amount: 100 },
  { category: "Furniture", amount: 250 },
];

const categoryTotals = {};

sales.forEach((sale) => {
  if (!categoryTotals[sale.category]) {
    categoryTotals[sale.category] = 0;
  }
  categoryTotals[sale.category] += sale.amount;
});

console.log("Suma sprzedaży według kategorii:", categoryTotals);

const products = [
  { category: "Books", quantity: 10 },
  { category: "Electronics", quantity: 5 },
  { category: "Books", quantity: 7 },
  { category: "Furniture", quantity: 3 },
  { category: "Electronics", quantity: 8 },
  { category: "Furniture", quantity: 4 },
];

const quantityTotals = {};

products.forEach((product) => {
  if (!quantityTotals[product.category]) {
    quantityTotals[product.category] = 0;
  }
  quantityTotals[product.category] += product.quantity;
});

console.log("Suma ilości według kategorii:", quantityTotals);
