// FUNKCJE STRZAŁKOWE (Arrow Functions)

const greet = (name) => {
  return `Cześć, ${name}!`;
};
console.log(greet("Anna"));

const multiply = (a, b) => a * b;
console.log(multiply(5, 3));

const getRandomNumber = () => Math.floor(Math.random() * 100);
console.log(getRandomNumber());

const square = (x) => x * x;
console.log(square(4));
