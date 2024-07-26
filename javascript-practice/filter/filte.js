const orders = [
  { id: 1, value: 250, status: "completed", date: "2024-06-25" },
  { id: 2, value: 75, status: "pending", date: "2024-07-01" },
  { id: 3, value: 150, status: "completed", date: "2024-07-10" },
  { id: 4, value: 200, status: "cancelled", date: "2024-07-05" },
  { id: 5, value: 125, status: "completed", date: "2024-07-20" },
  { id: 6, value: 300, status: "pending", date: "2024-07-23" },
  { id: 7, value: 50, status: "completed", date: "2024-06-30" },
];

function isRecent(dateStr, days) {
  const orderDate = new Date(dateStr);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - orderDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= days;
}

function isActiveOrder(order) {
  return (
    order.status !== "cancelled" &&
    order.value > 100 &&
    isRecent(order.date, 30)
  );
}

const activeOrders = orders.filter(isActiveOrder);

console.log(activeOrders);
