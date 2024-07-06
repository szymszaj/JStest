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
