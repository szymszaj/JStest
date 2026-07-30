const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 },
];

const resulte = people.filter((x) => x.age > 30).map((x) => x.name);

console.log(resulte);

const filteredNames = people
  .filter((person) => person.age > 30)
  .map((person) => person.name);

console.log(filteredNames);
