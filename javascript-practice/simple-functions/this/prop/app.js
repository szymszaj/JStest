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

const dog = new Animal("Rex", "dog");
const cat = new Animal("Fluffy", "cat");

dog.displayInfo();
cat.displayInfo();

console.log(Animal.compare(dog, cat));

dog.setProps({ age: 5, color: "brown" });
console.log(dog);
