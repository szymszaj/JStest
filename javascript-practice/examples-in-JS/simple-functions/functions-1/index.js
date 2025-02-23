function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even.`;
  } else {
    return `${number} is odd.`;
  }
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));

const product = [
  { name: "Apple", price: 3 },
  { name: "Banana", price: 1 },
  { name: "Cherry", price: 2 },
];

function sortAndDisplayFruits(order) {
  if (order === "most expensive") {
    product.sort((a, b) => b.price - a.price);
    console.log("Most expensive fruits:");
  } else if (order === "cheapest") {
    product.sort((a, b) => a.price - b.price);
    console.log("Cheapest fruits:");
  } else {
    console.log("Invalid command. Choose 'most expensive' or 'cheapest'.");
    return;
  }
  product.forEach((fruit) => {
    console.log(`${fruit.name}: $${fruit.price}`);
  });
}
