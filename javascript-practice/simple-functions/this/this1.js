const person = {
  name: "Robert",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayInfo = function () {
    console.log(`Car: ${this.year} ${this.make} ${this.model}`);
  };
}
const myCar = new Car("Ford", "Focus", 2020);
myCar.displayInfo();

