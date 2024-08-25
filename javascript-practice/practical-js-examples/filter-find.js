const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];
const olderUser = users.filter((user) => user.age > 27);
console.log(olderUser);

const olderUser1 = users.filter((user) => user.age > 30);
console.log(olderUser1);

