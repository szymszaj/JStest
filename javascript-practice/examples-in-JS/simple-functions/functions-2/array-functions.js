// FUNKCJE DO PRACY Z TABLICAMI

const filterAdults = (people) => people.filter((person) => person.age >= 18);

const people = [
  { name: "Anna", age: 17 },
  { name: "Bartek", age: 22 },
  { name: "Celina", age: 15 },
];

console.log(filterAdults(people));

const getNames = (people) => people.map((person) => person.name);
console.log(getNames(people));

const getTotalAge = (people) =>
  people.reduce((total, person) => total + person.age, 0);
console.log(getTotalAge(people));

const findByName = (people, name) =>
  people.find((person) => person.name === name);
console.log(findByName(people, "Bartek"));

