const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let totalSum = 0;

for (let i = 0; i < nestedArrays.length; i++) {
  for (let j = 0; j < nestedArrays[i].length; j++) {
    totalSum += nestedArrays[i][j];
  }
}

console.log("Total sum:", totalSum);

let dividedByFour = totalSum / 4;
console.log("Divided by 4:", dividedByFour);

console.log("Final result:", dividedByFour);

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
  { title: "The Road", author: "Cormac McCarthy", year: 2006 },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  { title: "The Help", author: "Kathryn Stockett", year: 2009 },
  { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
  { title: "The Nightingale", author: "Kristin Hannah", year: 2015 },
];

const booksAfter2000 = books.filter((book) => book.year > 2000);
const sortedBooks = booksAfter2000.sort((a, b) =>
  a.title.localeCompare(b.title)
);

console.log("Books published after 2000, sorted by title:");
sortedBooks.forEach((book) => {
  console.log(`${book.title} by ${book.author} (${book.year})`);
});

const GPUOld = [
  { name: "GTX 1080", brand: "Nvidia", price: 500, led: true },
  { name: "RX 580", brand: "AMD", price: 250, led: false },
  { name: "GTX 1070", brand: "Nvidia", price: 400, led: true },
  { name: "RX 570", brand: "AMD", price: 200, led: false },
  { name: "GTX 1060", brand: "Nvidia", price: 300, led: true },
  { name: "RX 560", brand: "AMD", price: 150, led: false },
  { name: "GTX 1050", brand: "Nvidia", price: 150, led: true },
  { name: "RX 550", brand: "AMD", price: 100, led: false },
];

const GPUNew = [
  { name: "RTX4060", brand: "Nvidia", price: 300, led: false },
  { name: "RTX4070", brand: "Nvidia", price: 400, led: false },
  { name: "RTX4070ti", brand: "Nvidia", price: 550, led: true },
  { name: "RTX4080", brand: "Nvidia", price: 1110, led: true },
  { name: "RTX4090", brand: "Nvidia", price: 1450, led: true },
];

const allGPU = [...GPUOld, ...GPUNew];

allGPU.sort((a, b) => a.price - b.price);

const amdGPUs = allGPU.filter((gpu) => gpu.brand === "AMD");
const nvidiaGPUs = allGPU.filter((gpu) => gpu.brand === "Nvidia");

console.log("Karty AMD posortowane według ceny:");
amdGPUs.forEach((gpu) => {
  console.log(`${gpu.name} - $${gpu.price}`);
});

console.log("\nKarty Nvidia posortowane według ceny:");
nvidiaGPUs.forEach((gpu) => {
  console.log(`${gpu.name} - $${gpu.price}`);
});
