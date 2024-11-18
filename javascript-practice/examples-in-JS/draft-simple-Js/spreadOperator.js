const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [...numbers, 4, 5];
console.log("newNumbers: ", newNumbers);

const filteredNumbers = newNumbers.filter((num) => num % 2 === 0);
console.log("filteredNumbers: ", filteredNumbers);

const person = {
  name: "John",
  age: 30,
};

const newPerson = {
  ...person,
  gender: "Male",
};

console.log("newPerson: ", newPerson);
