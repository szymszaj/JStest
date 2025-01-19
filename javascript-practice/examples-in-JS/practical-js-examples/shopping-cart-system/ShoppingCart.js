class ShoppingCart {
  constructor() {
    this.items = [];
    this.discounts = [];
  }

  addItem(item) {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push({ ...item, quantity: item.quantity || 1 });
    }
  }

  removeItem(itemId) {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index > -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  addDiscount(code, percentage) {
    this.discounts.push({ code, percentage });
  }

  calculateTotal() {
    const subtotal = this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const maxDiscount = Math.max(
      0,
      ...this.discounts.map((discount) => discount.percentage)
    );

    const discount = subtotal * (maxDiscount / 100);
    return {
      subtotal,
      discount,
      total: subtotal - discount,
    };
  }

  getCartSummary() {
    const totals = this.calculateTotal();
    return {
      items: this.items,
      itemCount: this.items.reduce((sum, item) => sum + item.quantity, 0),
      ...totals,
    };
  }
}

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
