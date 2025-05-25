const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Bartek" },
  { id: 3, name: "Celina" },
];

const filtered = users.filter((user) => user.name.startsWith("A"));
console.log(filtered);
