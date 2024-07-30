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
