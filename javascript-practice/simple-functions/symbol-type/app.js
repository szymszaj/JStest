const sym1 = Symbol("uniqueIdentifier1");
const sym2 = Symbol("uniqueIdentifier2");

console.log(sym1 === sym2);

const user = {
  [sym1]: "Szymon",
  age: 22,
  [sym2]: "Developer",
};

console.log(user[sym1]);
console.log(user[sym2]);

for (let key in user) {
  console.log(key);
}

console.log(JSON.stringify(user));

const symbols = Object.getOwnPropertySymbols(user);
console.log(symbols);
console.log(user[symbols[0]]);
console.log(user[symbols[1]]);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this[sym1] = "Private Info";
  }

  getPrivateInfo() {
    return this[sym1];
  }
}

const person = new Person("Alice", 30);
console.log(person.name);
console.log(person.age);
console.log(person.getPrivateInfo());

console.log(person[sym1]);
