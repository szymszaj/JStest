let globalSym = Symbol.for("name");

let anotherObj = {
  [globalSym]: "Global symbol value",
};

console.log(anotherObj[globalSym]);
let sameSym = Symbol.for("globalSymbol");

console.log(globalSym === sameSym);
