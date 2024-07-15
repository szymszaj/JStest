const numbers = new Map().set("one", 1);

const unique = new Set([1, 2, 3, 2, 1]);
unique.forEach((numbers) => console.log(numbers));

const fruits = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["banana", "yellow"],
]);

fruits.set("orange", "orange");
fruits.forEach((color, fruit) => console.log(`${fruit} is ${color}`));

const car = new Map([
  ["BMW", "Germany"],
  ["Audi", "Germany"],
  ["Mercedes", "Germany"],
]);
car.set("Ferrari", "Italy");
car.forEach((country, brand) => console.log(`${brand} is from ${country}`));
