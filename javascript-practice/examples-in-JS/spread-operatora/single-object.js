const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const updatedUsers = users.map((user) =>
  user.id === 2 ? { ...user, name: "Janet" } : user
);

console.log(updatedUsers);
