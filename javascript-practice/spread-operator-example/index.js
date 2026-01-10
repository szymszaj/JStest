function getLiczby() {
  return [1, 2, 3, 4, 5];
}

function getLitery() {
  return ["a", "b", "c", "d"];
}

const liczby = getLiczby();
const litery = getLitery();

const polaczone = [...liczby, ...litery];

console.log("Liczby:", liczby);
console.log("Litery:", litery);
console.log("Połączone używając spread operator:", polaczone);

function getPerson() {
  return {
    name: "John",
    age: 30,
    city: "New York",
  };
}

const person = getPerson();
const person2 = { ...person, age: 35 };

console.log("Person:", person);
console.log("Person2:", person2);
