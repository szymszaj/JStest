const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [99, 33, 88],
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
];

const booksAfter2000 = books.filter((book) => book.year > 2000);
const sortedBooks = booksAfter2000.sort((a, b) =>
  a.title.localeCompare(b.title)
);

console.log("Books published after 2000, sorted by title:");
sortedBooks.forEach((book) => {
  console.log(`${book.title} by ${book.author} (${book.year})`);
});
