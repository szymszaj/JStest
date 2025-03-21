const liczba = 42;
const zmiennoPrzecinkowa = 3.14;

const tekst = "Witaj świecie!";
const tekstZApostrofami = "JavaScript jest super!";
const tekstZTemplateString = `Wartość wynosi: ${liczba}`;

const prawda = true;
const falsz = false;

let niezdefiniowana;
const pustaWartosc = null;

const symbol = Symbol("unikalny");

const wielkiNumer = 9007199254740991n;

const tablica = [1, 2, 3, 4, 5];
const mieszanaTablica = [1, "tekst", true, { nazwa: "obiekt" }];
console.log(tablica[0]);
tablica.push(6);

const osoba = {
  imie: "Jan",
  nazwisko: "Kowalski",
  wiek: 30,
  adres: {
    ulica: "Kwiatowa",
    numer: 5,
    miasto: "Warszawa",
  },
};
console.log(osoba.imie);
console.log(osoba["nazwisko"]);

const teraz = new Date();
console.log(teraz.toISOString());

console.log(typeof liczba);
console.log(typeof tekst);
console.log(typeof osoba);
console.log(Array.isArray(tablica));
