const car = ["BMW", "Audi", "Mercedes"];

for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}

const towns = ["London", "Paris", "New York", "Tokyo", "Berlin"];

for (let i = 0; i < towns.length; i++) {
  console.log(`this town is named ${towns[i].toUpperCase()}`);
}

let x = 0;

while (x <= 10) {
  console.log(x);
  x++;
}

for (let x = 0; x <= 45; x++) {
  if (x % 2 === 0) {
    console.log("%c" + x, "color: red;");
  } else {
    console.log("%c" + x, "color: red");
  }
}

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
const books1 = [
  { title: "Book 1", author: "Author 1", read: true },
  { title: "Book 2", author: "Author 2", read: false },
  { title: "Book 3", author: "Author 3", read: true },
];

for (let i = 0; i < books.length; i++) {
  if (!books[i].read) continue;
  console.log(
    `Przeczytana książka: "${books[i].title}" autorstwa ${books[i].author}`
  );
}

const readBooksTitles1 = [];
for (let i = 0; i < books.length; i++) {
  if (books[i].read) {
    readBooksTitles.push(books[i].title);
  }
}

console.log("Tytuły przeczytanych książek:", readBooksTitles);
