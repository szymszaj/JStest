const name = "ola";
const age = 20;
console.log(`Hi my name is ${name} and I am ${age} years old`);

const user = { id: 1, name1: "John", role: "admin" };
const { name1, role } = user;

console.log(`Hi my name is ${name1} and I am ${age} years old`);
console.log(`My role is ${role}`);

const users = [
  { id: 1, name: "John", age: 28 },
  { id: 2, name: "Jane", age: 18 },
  { id: 3, name: "Emily", age: 38 },
];

users.forEach((u) => {
  console.log(`Hi my name is ${u.name} and I am ${u.age} years old`);
});

const product = { id: 1, name: "Laptop", price: 1000 };
const discount = 0.1;
console.log(
  `The price of the ${product.name} after a discount of ${
    discount * 100
  }% is $${product.price * (1 - discount)}`
);

const userDescriptions = users.map(
  (u) => `Hi my name is ${u.name} and I am ${u.age} years old`
);
console.log(userDescriptions);

const title = "ES6 Template Literals";
const author = "MDN Web Docs";
const year = 2015;

const bookInfo = `
  Title: ${title}
  Author: ${author}
  Year: ${year}
`;
console.log(bookInfo);

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

const multiLine = `This is a string
that spans across
multiple lines.`;
console.log(multiLine);

const calculateArea = (...args) => {
  const [radius, pi = 3.14159] = args;
  return `The area of a circle with radius ${radius} is ${pi * radius * radius}`;
}