let person = {
  name: "Jonh",
  age: 23,
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};
person.greet();

class car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  makeSound() {
    console.log(this.brand + " " + this.model + " " + "beep beep");
  }
}
let myCar = new car("Ford", "Mustang", 2021);
