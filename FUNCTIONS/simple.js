function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ali"));

const greet2 = function (name) {
  return "Hello, " + name + "!";
};
console.log(greet2("Ali"));

const greet3 = (name) => {
  return "Hello, " + name + "!";
};

const greet4 = (name) => "Hello, " + name + "!";
const duble = (x) => x * 2;

console.log(greet3("carol"));
console.log(duble(5));
