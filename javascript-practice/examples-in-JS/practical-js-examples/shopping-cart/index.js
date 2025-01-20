import { ShoppingCart } from './lib/ShoppingCart.js';

const cart = new ShoppingCart();

cart.addItem({
  id: 66,
  name: "Boss",
  price: 209.99,
  quantity: 2,
});

cart.addItem({
  id: 2,
  name: "Hugo Boss",
  price: 49.99,
  quantity: 1,
});

cart.addDiscount("SUMMER20", 20);

console.log(cart.getCartSummary());
