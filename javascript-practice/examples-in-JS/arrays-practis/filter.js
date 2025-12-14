const nums = [1, 2, 3, 4, 5];
const biggerThan2 = nums.filter((n) => n > 2);

console.log(biggerThan2);

const name = ["Anna", "Bob", "Charlie", "David", "Eve"];
const longNames = name.filter((n) => n.length > 4);

console.log(longNames);

const chemicalElements = [
  { name: "Hydrogen", symbol: "H", atomicNumber: 1 },
  { name: "Helium", symbol: "He", atomicNumber: 2 },
  { name: "Lithium", symbol: "Li", atomicNumber: 3 },
  { name: "Beryllium", symbol: "Be", atomicNumber: 4 },
  { name: "Boron", symbol: "B", atomicNumber: 5 },
];

const heavyElements = chemicalElements.filter((el) => el.atomicNumber > 2);

console.log(heavyElements);
