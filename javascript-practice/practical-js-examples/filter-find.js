const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];
const olderUser = users.filter((user) => user.age > 27);
console.log(olderUser);

const olderUser1 = users.filter((user) => user.age > 30);
console.log(olderUser1);

const users1 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const longNameUsers = users1.filter((user) => user.name.length > 3);
console.log(longNameUsers);

const exactLengthNameUsers = users1.filter((user) => user.name.length === 3);
console.log(exactLengthNameUsers);
