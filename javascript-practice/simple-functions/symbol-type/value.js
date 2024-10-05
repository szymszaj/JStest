const globalSym = Symbol.for("name");

const anotherObj = {
  [globalSym]: "Global symbol value",
};

console.log(anotherObj[globalSym]);

const sameSym = Symbol.for("globalSymbol");

console.log(globalSym === sameSym);

const sameGlobalSym = Symbol.for("name");

console.log(globalSym === sameGlobalSym);
