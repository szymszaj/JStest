function displayPerson({ name, age, city = "Warszawa" }) {
  return `${name} ma ${age} lat i mieszka w ${city}`;
}

const person = { name: "Piotr", age: 28, city: "Kraków" };
console.log(displayPerson(person));

const person2 = { name: "Anna", age: 25 };
console.log(displayPerson(person2));

function getFirstTwo([first, second]) {
  return { first, second };
}

const numbers = [10, 20, 30, 40];
console.log(getFirstTwo(numbers));

function sumAndProduct([a, b]) {
  return { sum: a + b, product: a * b };
}

const nums = [5, 3];
console.log(sumAndProduct(nums));