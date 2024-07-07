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
  { title: "Gra o tron", author: "George R.R. Martin", read: false }
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