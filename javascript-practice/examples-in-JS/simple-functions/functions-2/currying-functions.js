const curriedAdd = (a) => (b) => (c) => a + b + c;

console.log(curriedAdd(1)(2)(3));

const addTax = (taxRate) => (price) => price + price * taxRate;
const addVAT = addTax(0.23);

console.log(addVAT(100));
console.log(addVAT(200));

const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(10));
console.log(multiplyBy5(20));
