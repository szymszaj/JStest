const users = [
  { firstName: "John", age: 28 },
  { firstName: "Jane", age: 18 },
  { firstName: "Emily", age: 38 },
  { firstName: "Mike", age: 15 },
];

const adultsNames = users.filter((u) => u.age >= 18).map((u) => u.firstName);

console.log(adultsNames);
