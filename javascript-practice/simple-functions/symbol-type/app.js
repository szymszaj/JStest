let sym1 = Symbol("key");
let sym2 = Symbol("key");

let obj = {
  [sym1]: "First symbol value",
  [sym2]: "Second symbol value",
};

console.log(obj[sym1]);
console.log(obj[sym2]);
console.log(sym1 === sym2);

let symA = Symbol("uniqueKey");
let symB = Symbol("uniqueKey");

let anotherObj = {
  [symA]: "Value for symA",
  [symB]: "Value for symB",
};

console.log(anotherObj[symA]);
console.log(anotherObj[symB]);
console.log(symA === symB);
