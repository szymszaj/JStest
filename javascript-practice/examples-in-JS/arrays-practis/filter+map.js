const users = [
  { firstName: "John", age: 28 },
  { firstName: "Jane", age: 18 },
  { firstName: "Emily", age: 38 },
  { firstName: "Mike", age: 15 },
];

const adultsNames = users.filter((u) => u.age >= 18).map((u) => u.firstName);

console.log(adultsNames);

const IdNmubers = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Cezary" },
];

const names = IdNmubers.map((u) => u.name);
console.log(names);
