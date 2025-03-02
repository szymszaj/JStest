// Komentarze jednoliniowe
/* Komentarze
   wieloliniowe */

// Zmienne
let zmienna = 10; // Zmienna lokalna (można zmienić wartość)
const stala = 20; // Stała (nie można zmienić wartości)
var staraZmienna = 30; // Stary sposób deklaracji (unikaj w nowym kodzie)

// Instrukcje warunkowe
if (zmienna > 5) {
  console.log("Zmienna jest większa niż 5");
} else if (zmienna === 5) {
  console.log("Zmienna jest równa 5");
} else {
  console.log("Zmienna jest mniejsza niż 5");
}

// Operator trójargumentowy
const wynik = zmienna > 15 ? "Większa niż 15" : "Mniejsza lub równa 15";

// Pętle
for (let i = 0; i < 5; i++) {
  console.log(`Iteracja ${i}`);
}

let j = 0;
while (j < 5) {
  console.log(`While: ${j}`);
  j++;
}

// Switch
const kolor = "czerwony";
switch (kolor) {
  case "czerwony":
    console.log("Kolor jest czerwony");
    break;
  case "niebieski":
    console.log("Kolor jest niebieski");
    break;
  default:
    console.log("Nieznany kolor");
}
