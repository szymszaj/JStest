const globalSym = Symbol.for("name");

const anotherObj = {
  [globalSym]: "Global symbol value",
};

console.log(anotherObj[globalSym]);

const sameSym = Symbol.for("globalSymbol");

console.log(globalSym === sameSym);

const sameGlobalSym1 = Symbol.for("name");

console.log(globalSym === sameGlobalSym);

const globalSym1 = Symbol.for("name");

const advancedObj = {
  [globalSym]: "Global symbol value",
  localSym: Symbol("local"),
  [Symbol.iterator]: function* () {
    yield this[globalSym];
    yield this.localSym.description;
  },
  displaySymbols: function () {
    console.log(`Global Symbol: ${this[globalSym]}`);
    console.log(`Local Symbol: ${this.localSym.description}`);
  },
};

console.log(advancedObj[globalSym]);

const sameGlobalSym = Symbol.for("name");

console.log(globalSym === sameGlobalSym);

advancedObj.displaySymbols();

for (let value of advancedObj) {
  console.log(value);
}
