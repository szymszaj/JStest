// Car array
const car = ["BMW", "Audi", "Mercedes"];
for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}

// Town array
const towns = ["London", "Paris", "New York", "Tokyo", "Berlin"];
for (let i = 0; i < towns.length; i++) {
  console.log(`This town is named ${towns[i].toUpperCase()}`);
}

// Numbers loop
let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}

// Number formatting with color
for (let x = 0; x <= 45; x++) {
  if (x % 2 === 0) {
    console.log("%c" + x, "color: red;");
  } else {
    console.log("%c" + x, "color: blue");
  }
}

// Books array
const books = [
  { title: "Harry Potter", author: "J.K. Rowling", read: true },
  { title: "Wiedźmin", author: "Andrzej Sapkowski", read: false },
  { title: "Hobbit", author: "J.R.R. Tolkien", read: true },
  { title: "Gra o tron", author: "George R.R. Martin", read: false },
];

for (const { title, author, read } of books) {
  if (!read) continue;
  console.log(`Przeczytana książka: "${title}" autorstwa ${author}`);
}

const readBooksTitles = [];
for (const { title, read } of books) {
  if (read) readBooksTitles.push(title);
}

console.log("Tytuły przeczytanych książek:", readBooksTitles);

// Additional Books array processing
const books1 = [
  { title: "Book 1", author: "Author 1", read: true },
  { title: "Book 2", author: "Author 2", read: false },
  { title: "Book 3", author: "Author 3", read: true },
];

for (let i = 0; i < books1.length; i++) {
  if (!books1[i].read) continue;
  console.log(
    `Przeczytana książka: "${books1[i].title}" autorstwa ${books1[i].author}`
  );
}

const readBooksTitles1 = [];
for (let i = 0; i < books1.length; i++) {
  if (books1[i].read) {
    readBooksTitles1.push(books1[i].title);
  }
}

console.log("Tytuły przeczytanych książek:", readBooksTitles1);

// Numbers array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`${numbers[i]} is even`);
  } else {
    console.log(`${numbers[i]} is odd`);
  }
}

// New: Fruits array
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

console.log("Fruits that start with a vowel:");
for (let i = 0; i < fruits.length; i++) {
  const firstLetter = fruits[i][0].toLowerCase();
  if ("aeiou".includes(firstLetter)) {
    console.log(fruits[i]);
  }
}

// New: Movies array
const movies = [
  { title: "Inception", year: 2010, watched: true },
  { title: "The Matrix", year: 1999, watched: true },
  { title: "Interstellar", year: 2014, watched: false },
];

for (const { title, year, watched } of movies) {
  if (!watched) continue;
  console.log(`Watched movie: "${title}" from ${year}`);
}

const watchedMovies = [];
for (const { title, watched } of movies) {
  if (watched) watchedMovies.push(title);
}

console.log("Titles of watched movies:", watchedMovies);
