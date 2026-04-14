function greet(name) {
  return `Cześć, ${name}!`;
}
console.log(greet("Anna"));

const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3));

const multiply = (a, b) => a * b;
console.log(multiply(4, 2));

function divide(a, b = 1) {
  return a / b;
}
console.log(divide(10, 2));
console.log(divide(10));

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

const numbers = [1, 2, 3];
numbers.forEach(function (num) {
  console.log(num * 2);
});

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(5));

function processArray(arr, callback) {
  return arr.map(callback);
}

const doubled = processArray([1, 2, 3], (x) => x * 2);
console.log(doubled);

const filterEven = (arr) => arr.filter((num) => num % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5, 6]));

const getSum = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(getSum([1, 2, 3, 4, 5]));

const compose = (f, g) => (x) => f(g(x));

const addOne = (x) => x + 1;
const double2 = (x) => x * 2;

const addOneThenDouble = compose(double2, addOne);
console.log(addOneThenDouble(5));

function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const curriedAdd = curry(1);
console.log(curriedAdd(2)(3));

const curriedAdd2 = (a) => (b) => (c) => a + b + c;
console.log(curriedAdd2(10)(20)(30));

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

const handleSearch = debounce((query) => {
  console.log(`Szukam: ${query}`);
}, 1000);

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Z cache'a");
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(5));
console.log(fibonacci(5));
