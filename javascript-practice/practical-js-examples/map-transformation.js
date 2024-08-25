const exampleUser = [
  { id: 55, name: "Alice", age: 25 },
  { id: 33, name: "Bob", age: 30 },
  { id: 351, name: "Charlie", age: 35 },
  { id: 21, name: "David", age: 40 },
];
const userNames = exampleUser.map((user) => ({
  userId: user.id,
  // userName: user.name,
  useAge: user.age,
}));
console.log(userNames);
