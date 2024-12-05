function getDog(name, breed, age, weight) {
  return {
    name,
    breed,
    age,
    weight,
    eat() {
      console.log(this.name + ": Chomp");
    },
    bark() {
      console.log(this.name + ": Woof");
    },
  };
}
function Dog(name, breed, age, weight) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weight = weight;
  this.eat = function () {
    console.log(this.name + ": Chomp");
  };
  this.bark = function () {
    console.log(this.name + ": Woof");
  };
}

const anotherDog = new Dog("Buddy", "Golden Retriever", 5, 30);

console.log(anotherDog);
