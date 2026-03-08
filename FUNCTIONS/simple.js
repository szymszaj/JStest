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

function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

const { min, max } = getMinMax([3, 1, 9, 2, 7]);
console.log(min, max);

function noReturn() {
  const x = 5;
}
console.log(noReturn());

const noReturn2 = () => {
  const x = 5;
};
console.log(noReturn2());

let count = 0;
function increment() {
  count++;
}
increment();
console.log(count);

const increment2 = () => {
  count++;
};
increment2();
console.log(count);