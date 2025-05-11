const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const person = { name: "Jon", age: 30 };
const updatePerson = { ...person, city: "Warszawa" };

console.log(updatePerson);
