const sym1 = Symbol("uniqueIdentifier");
const sym2 = Symbol("uniqueIdentifier");

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
