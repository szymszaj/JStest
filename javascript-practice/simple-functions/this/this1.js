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

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  displayInfo() {
    console.log(`Animal: ${this.name} ${this.species}`);
  }
  static compare(animall1, animal2) {
    return animall1.species === animal2.species;
  }
}

const dog = new Animal("Rex", "dog");
const cat = new Animal("Fluffy", "cat");

dog.displayInfo();
cat.displayInfo();

console.log(Animal.compare(dog, cat));
