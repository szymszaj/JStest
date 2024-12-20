const myObject = {
  data: [5, 3, 8, 1],

  sort(compareFunction) {
    this.data.sort(compareFunction);
    return this;
  },

  forEach(callback) {
    this.data.forEach(callback);
  },
};

myObject.sort((a, b) => a - b).forEach((item) => console.log(item));
