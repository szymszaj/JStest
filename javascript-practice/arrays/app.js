let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
  console.log(fruit);
});

for (let fruit of fruits) {
  console.log(fruit);
}
let cars = ["BMW", "Audi", "Mercedes"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
cars.forEach(function (car) {
  console.log(car);
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

let totalAge = people.reduce((total, person) => total + person.age, 0);
console.log(totalAge);
let names = people.map((person) => person.name);
console.log(names);

let ages = people.map((person) => person.age);
console.log(ages);

let filteredPeople = people.filter((person) => person.age > 30);
console.log(filteredPeople);

let sortedPeople = people.sort((a, b) => a.age - b.age);
console.log(sortedPeople);