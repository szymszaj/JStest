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

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 },
  { name: "Monitor", price: 300 },
];

function filterAndSortProducts(products, minPrice) {
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice
  );

  filteredProducts.sort((a, b) => a.price - b.price);

  return filteredProducts;
}

console.log(filterAndSortProducts(products, 600));

const products1 = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 },
  { name: "Monitor", price: 300 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 },
];

function groupAndSortProducts1(products1) {
  const groupedProducts1 = {
    cheap: [],
    moderate: [],
    expensive: [],
  };

  products1.forEach((product) => {
    if (product.price < 100) {
      groupedProducts1.cheap.push(product);
    } else if (product.price >= 100 && product.price <= 700) {
      groupedProducts1.moderate.push(product);
    } else {
      groupedProducts1.expensive.push(product);
    }
  });

  groupedProducts1.cheap.sort((a, b) => a.price - b.price);
  groupedProducts1.moderate.sort((a, b) => a.price - b.price);
  groupedProducts1.expensive.sort((a, b) => a.price - b.price);

  return groupedProducts1;
}

const groupedAndSortedProducts1 = groupAndSortProducts1(products1);
console.log("Cheap products1:", groupedAndSortedProducts1.cheap);
console.log("Moderate products1:", groupedAndSortedProducts1.moderate);
console.log("Expensive products1:", groupedAndSortedProducts1.expensive);
