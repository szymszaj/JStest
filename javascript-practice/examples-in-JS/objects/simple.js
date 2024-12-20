const dataManager = {
  data: [],

  add(item) {
    this.data.push(item);
    return this;
  },

  remove(item) {
    this.data = this.data.filter((i) => i !== item);
    return this;
  },

  sort(compareFunction) {
    this.data.sort(compareFunction);
    return this;
  },

  forEach(callback) {
    this.data.forEach(callback);
  },

  print() {
    console.log(this.data);
    return this;
  },
};

dataManager
  .add(10)
  .add(5)
  .add(20)
  .print()
  .sort((a, b) => a - b)
  .print()
  .remove(10)
  .forEach((item) => console.log(`Item: ${item}`));
