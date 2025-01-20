export class ShoppingCart {
  constructor() {
    this.items = [];
    this.discounts = new Map();
  }

  addItem(item) {
    this.items.push(item);
  }

  addDiscount(code, percentage) {
    this.discounts.set(code, percentage);
  }

  getCartSummary() {
    const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = Array.from(this.discounts.values()).reduce((max, value) => Math.max(max, value), 0) / 100;
    const total = subtotal * (1 - discount);

    return {
      items: this.items,
      subtotal: subtotal.toFixed(2),
      discount: (discount * 100) + '%',
      total: total.toFixed(2)
    };
  }
}
