const uzytkownicy = [
  { id: 1, imie: "Anna", wiek: 28, aktywny: true, punkty: 150 },
  { id: 2, imie: "Jan", wiek: 34, aktywny: false, punkty: 90 },
  { id: 3, imie: "Kasia", wiek: 22, aktywny: true, punkty: 200 },
  { id: 4, imie: "Piotr", wiek: 45, aktywny: true, punkty: 50 },
  { id: 5, imie: "Ewa", wiek: 19, aktywny: false, punkty: 180 },
];

const aktywniPelnoletnii = uzytkownicy.filter((u) => u.wiek >= 18 && u.aktywny);

const zBonusem = uzytkownicy.map((u) =>
  u.aktywny ? { ...u, punkty: u.punkty + 50 } : u,
);

const najlepszy = uzytkownicy.reduce((max, u) =>
  u.punkty > max.punkty ? u : max,
);

const dorośli = uzytkownicy.filter((u) => u.wiek >= 25);
const mlodzi = uzytkownicy.filter((u) => u.wiek < 25);

const czyJestTopUser = uzytkownicy.some((u) => u.punkty > 100);

const aktywni = uzytkownicy.filter((u) => u.aktywny);
const sredniaWieku =
  aktywni.reduce((suma, u) => suma + u.wiek, 0) / aktywni.length;

const ranking = [...uzytkownicy]
  .sort((a, b) => b.punkty - a.punkty)
  .map((u, index) => ({ ...u, pozycja: index + 1 }));

const znajdzPoImieniu = (imie) =>
  uzytkownicy.find((u) => u.imie.toLowerCase() === imie.toLowerCase());

console.log("Top użytkownik:", najlepszy);
console.log("Średnia wieku aktywnych:", sredniaWieku.toFixed(1));
console.log("Ranking:", ranking);
