const orders = [
  { id: 1, product: "Laptop", category: "Elektronika", date: "2024-02-20" },
  { id: 2, product: "Mysz", category: "Elektronika", date: "2024-02-20" },
  { id: 3, product: "Krzesło", category: "Meble", date: "2024-02-21" },
  { id: 4, product: "Biurko", category: "Meble", date: "2024-02-21" },
  { id: 5, product: "Monitor", category: "Elektronika", date: "2024-02-22" },
];

const groupByCategory = orders.reduce((groups, order) => {
  const category = order.category;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(order);
  return groups;
}, {});

const groupByDate = orders.reduce((groups, order) => {
  const date = order.date;
  groups[date] = groups[date] || [];
  groups[date].push(order);
  return groups;
}, {});

console.log("Po kategorii:", groupByCategory);
console.log("Po dacie:", groupByDate);
