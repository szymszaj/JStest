let sym1 = Symbol("key");
let sym2 = Symbol("key");

let obj = {
  [sym1]: "First symbol value",
  [sym2]: "Second symbol value",
};

console.log(obj[sym1]);
console.log(obj[sym2]);
console.log(sym1 === sym2);
