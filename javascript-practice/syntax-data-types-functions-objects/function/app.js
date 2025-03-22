// 1. Deklaracja funkcji
function dodaj(a, b) {
  return a + b;
}

// 2. Wyrażenie funkcyjne
const odejmij = function (a, b) {
  return a - b;
};

// 3. Funkcja strzałkowa (arrow function)
const pomnoz = (a, b) => {
  return a * b;
};

// Skrócona notacja dla prostych funkcji strzałkowych
const podziel = (a, b) => a / b;

// 4. Parametry domyślne
function przywitaj(imie = "Gość") {
  return `Witaj, ${imie}!`;
}

// 5. Rest parameters
function suma(...liczby) {
  return liczby.reduce((total, num) => total + num, 0);
}

console.log(suma(1, 2, 3, 4, 5)); // 15

// 6. Funkcje zwrotne (callbacks)
function wykonajOperacje(a, b, callback) {
  return callback(a, b);
}

const wynik = wykonajOperacje(5, 3, dodaj); // 8

// 7. Funkcje jako metody obiektów
const kalkulator = {
  aktualnaWartosc: 0,
  dodaj: function (x) {
    this.aktualnaWartosc += x;
    return this;
  },
  odejmij: function (x) {
    this.aktualnaWartosc -= x;
    return this;
  },
  pobierzWartosc: function () {
    return this.aktualnaWartosc;
  },
};

// Łańcuchowanie metod
console.log(kalkulator.dodaj(5).odejmij(2).pobierzWartosc()); // 3

// 8. IIFE (Immediately Invoked Function Expression)
(function () {
  const prywatnaZmienna = "Nie jestem dostępna na zewnątrz";
  console.log("Ta funkcja wykonuje się natychmiast");
})();
