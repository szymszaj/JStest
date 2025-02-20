const fruits = [
  { name: "Apple", price: 3 },
  { name: "Banana", price: 1 },
  { name: "Cherry", price: 2 },
];

function sortAndDisplayFruits(order) {
  if (order === "most expensive") {
    fruits.sort((a, b) => b.price - a.price);
    console.log("Most expensive fruits:");
  } else if (order === "cheapest") {
    fruits.sort((a, b) => a.price - b.price);
    console.log("Cheapest fruits:");
  } else {
    console.log("Invalid command. Choose 'most expensive' or 'cheapest'.");
    return;
  }
  fruits.forEach((fruit) => {
    console.log(`${fruit.name}: $${fruit.price}`);
  });
}

sortAndDisplayFruits("cheapest");
sortAndDisplayFruits("most expensive");
