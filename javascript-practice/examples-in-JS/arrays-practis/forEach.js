const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num * 2));

const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Cezary", age: 28 },
];

users.forEach((user) => {
  console.log(`${user.name} ma ${user.age} lat`);
});

const fruits = ["jabłko", "banana", "pomarańcza", "winogrono"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit.toUpperCase()}`);
});
