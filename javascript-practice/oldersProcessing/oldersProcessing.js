import { orders } from "./orders.js";

const shippedOrders = orders.filter((order) => order.status === "shipped");

const ordersWithTotal = shippedOrders.map((order) => ({
  orderId: order.orderId,
  user: order.user,
  total: order.products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  ),
}));

ordersWithTotal.sort((a, b) => b.total - a.total);

console.log(ordersWithTotal);
