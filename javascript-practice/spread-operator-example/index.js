function getLiczby() {
  return [1, 2, 3, 4, 5];
}

function getLitery() {
  return ["a", "b", "c", "d"];
}

const liczby = getLiczby();
const litery = getLitery();

const polaczone = [...liczby, ...litery];

console.log("Liczby:", liczby);
console.log("Litery:", litery);
console.log("Połączone używając spread operator:", polaczone);
