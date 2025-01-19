class ShoppingCart {
  constructor() {
    this.item = [];
    this.discount = [];
  }

  addItem(item) {
    const existingItem = this.item.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.item.push({ ...item, quantity: item.quantity || 1 });
    }
  }

  removeItem(itemID) {
    const index = this.item.findIndex((item) => item.id === itemID);
    if (index > -1) {
      this.item.splice(index, 1);
      return true;
    }
    return false;
  }
  addDiscount(code, percentage) {
    this.discount.push({ code, percentage });
  }
  cakculateTotal() {
    const subtotal = this.item.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    const maxDiscount = Math.max(
      0,
      ...this.discount.map((discount) => discount.percentage)
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
