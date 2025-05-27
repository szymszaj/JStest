const users = [
  { id: 1, name: "Anna", age: 28, active: true },
  { id: 2, name: "Bartek", age: 34, active: false },
  { id: 3, name: "Celina", age: 25, active: true },
  { id: 4, name: "Adam", age: 42, active: true },
  { id: 5, name: "Dorota", age: 31, active: false },
];

const startsWithA = users.filter((user) => user.name.startsWith("A"));
console.log("Użytkownicy z imieniem na A:", startsWithA);

const olderThan30 = users.filter((user) => user.age > 30);
console.log("Użytkownicy powyżej 30 lat:", olderThan30);

const activeUsers = users.filter((user) => user.active);
console.log("Aktywni użytkownicy:", activeUsers);

const youngActiveUsers = users.filter((user) => user.age < 30 && user.active);
console.log("Młodzi i aktywni użytkownicy:", youngActiveUsers);

const searchName = (query) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};
console.log('Wyszukiwanie "a":', searchName("a"));
