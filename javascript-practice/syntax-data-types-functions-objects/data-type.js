// 1. Typy proste

// Number
const liczba = 42;
const zmiennoPrzecinkowa = 3.14;

// String
const tekst = "Witaj świecie!";
const tekstZApostrofami = "JavaScript jest super!";
const tekstZTemplateString = `Wartość wynosi: ${liczba}`; // Interpolacja zmiennych

// Boolean
const prawda = true;
const falsz = false;

// Undefined i null
let niezdefiniowana; // undefined
const pustaWartosc = null;

// Symbol (wprowadzony w ES6)
const symbol = Symbol("unikalny");

// BigInt (dla bardzo dużych liczb)
const wielkiNumer = 9007199254740991n;

// 2. Typy złożone

// Array (tablica)
const tablica = [1, 2, 3, 4, 5];
const mieszanaTablica = [1, "tekst", true, { nazwa: "obiekt" }];
console.log(tablica[0]); // 1
tablica.push(6); // Dodaje 6 na koniec tablicy

// Object (obiekt)
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
console.log(osoba.imie); // Jan
console.log(osoba["nazwisko"]); // Kowalski

// Date (data)
const teraz = new Date();
console.log(teraz.toISOString());

// 3. Sprawdzanie typów
console.log(typeof liczba); // "number"
console.log(typeof tekst); // "string"
console.log(typeof osoba); // "object"
console.log(Array.isArray(tablica)); // true, sprawdzanie czy to tablica
