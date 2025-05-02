const users = [
  { name: "Anna", age: 25 },
  { name: "Bartek", age: 30 },
  { name: "Celina", age: 22 },
  { name: "Darek", age: 28 },
];

const sortedByAge = users.sort((a, b) => a.age - b.age);

console.log("Użytkownicy posortowani według wieku:");
console.log(sortedByAge);

const sortedByName = users.sort((a, b) => a.name.localeCompare(b.name));

console.log("Użytkownicy posortowani według nazwy:");
console.log(sortedByName);
