const exampleUser = [
  { id: 55, name: "Alice", age: 25, job: "developer" },
  { id: 33, name: "Bob", age: 30, job: "design" },
  { id: 351, name: "Charlie", age: 35, job: "manager" },
  { id: 21, name: "David", age: 40, job: "developer" },
  { id: 21, name: "David", age: 40 },
];
const userNames = exampleUser.map((user) => ({
  userId: user.id,
  userName: user.name,
  useAge: user.age,
  userJob: user.job || "No job",
}));
console.log(userNames);

const User = [
  { salary: 1000, name: "Alice" },
  { salary: 2000, name: "Bob" },
  { salary: 3000, name: "Charlie" },
  { salary: 4000, name: "David" },
  { salary: 5000, name: "Eve" },
];
const userSalary = User.map((user) => ({
  userName: user.name,
  userSalary: user.salary,
}));
console.log(userSalary);
