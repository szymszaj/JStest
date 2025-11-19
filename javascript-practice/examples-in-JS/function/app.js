const getUserInfo = ({ name = "Guest", age = 0, role = "User" } = {}) => ({
  displayName: name.toUpperCase(),
  isAdult: age >= 18,
  permissions: role === "Admin" ? ["read", "write", "delete"] : ["read"],
});

const createCounter = (initialValue = 0) => {
  let count = initialValue;
  return {
    increment: (step = 1) => (count += step),
    decrement: (step = 1) => (count -= step),
    getValue: () => count,
    reset: () => (count = initialValue),
  };
};

const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const multiply = (factor) => (num) => num * factor;
const add = (amount) => (num) => num + amount;
const format = (num) => `Result: ${num.toFixed(2)}`;

const calculate = pipe(multiply(2), add(10), format);

console.log(getUserInfo({ name: "John", age: 25, role: "Admin" }));

const counter = createCounter(10);
console.log(counter.increment(5));
console.log(counter.getValue());

fetchUserData(1).then((result) => console.log(result));

console.log(calculate(5));
