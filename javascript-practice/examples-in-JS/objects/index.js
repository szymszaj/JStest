let person = {
  name: "Jonh",
  age: 23,
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};
person.greet();
