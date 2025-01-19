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
}
