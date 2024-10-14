let id = Symbol("id");

let user = {
  name: "John",
  [id]: 12345,
};

console.log(user[id]);

let id2 = Symbol("id");
let game = {
  name: "Chess",
  [id2]: "pass",
};
console.log(game[id2]);

let uniqueId = Symbol("uniqueId");

let person = {
  firstName: "Alice",
  lastName: "Smith",
  [uniqueId]: 67890,
};

console.log(person[uniqueId]);

let uniqueId2 = Symbol("uniqueId");
let book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  [uniqueId2]: "ISBN-123-456",
};

console.log(book[uniqueId2]);
