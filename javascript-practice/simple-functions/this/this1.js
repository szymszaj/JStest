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

  static compare(animal1, animal2) {
    return animal1.species === animal2.species;
  }
}

const dog = new Animal("Rex", "dog");
const cat = new Animal("Fluffy", "cat");

dog.displayInfo();
cat.displayInfo();

console.log(Animal.compare(dog, cat));

class Dinner {
  constructor(sushi, aperol) {
    this.sushi = sushi;
    this.aperol = aperol;
  }

  displayInfo() {
    console.log(`Dinner: ${this.sushi} and my drink is ${this.aperol}`);
  }
}
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  displayInfo() {
    console.log(`Animal: ${this.name} ${this.species}`);
  }

  static compare(animal1, animal2) {
    return animal1.species === animal2.species;
  }

  setProps(props) {
    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }
}

const dog1 = new Animal("Rex", "dog");
const cat1 = new Animal("Fluffy", "cat");

dog.displayInfo();
cat.displayInfo();

console.log(Animal.compare(dog1, cat1));

dog.setProps({ age: 5, color: "brown" });
console.log(dog);
