let zmienna = 10;
const stala = 20;
var staraZmienna = 30;

if (zmienna > 5) {
  console.log("Zmienna jest większa niż 5");
} else if (zmienna === 5) {
  console.log("Zmienna jest równa 5");
} else {
  console.log("Zmienna jest mniejsza niż 5");
}

const wynik = zmienna > 15 ? "Większa niż 15" : "Mniejsza lub równa 15";

for (let i = 0; i < 5; i++) {
  console.log(`Iteracja ${i}`);
}

let j = 0;
while (j < 5) {
  console.log(`While: ${j}`);
  j++;
}

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
