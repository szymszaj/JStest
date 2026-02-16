const produkty = [
  {
    id: 1,
    nazwa: "Laptop",
    cena: 3500,
    kategoria: "elektronika",
    dostepny: true,
  },
  { id: 2, nazwa: "Mysz", cena: 80, kategoria: "elektronika", dostepny: true },
  {
    id: 3,
    nazwa: "Klawiatura",
    cena: 250,
    kategoria: "elektronika",
    dostepny: false,
  },
  {
    id: 4,
    nazwa: "Monitor",
    cena: 1200,
    kategoria: "elektronika",
    dostepny: true,
  },
  { id: 5, nazwa: "Krzesło", cena: 600, kategoria: "meble", dostepny: true },
];

// 1. Filtruj tylko dostępne produkty
const dostepneProdukty = produkty.filter((produkt) => produkt.dostepny);

// 2. Pobierz tylko nazwy produktów
const nazwy = produkty.map((produkt) => produkt.nazwa);

// 3. Znajdź produkty tańsze niż 500 zł
const tanie = produkty.filter((produkt) => produkt.cena < 500);

// 4. Oblicz całkowitą wartość produktów
const sumaWartosci = produkty.reduce((suma, produkt) => suma + produkt.cena, 0);

// 5. Sprawdź czy wszystkie produkty są dostępne
const wszystkieDostepne = produkty.every((produkt) => produkt.dostepny);

// 6. Znajdź pierwszy produkt z kategorii 'meble'
const mebel = produkty.find((produkt) => produkt.kategoria === "meble");

// 7. Sortuj produkty po cenie (rosnąco)
const posortowane = [...produkty].sort((a, b) => a.cena - b.cena);

console.log("Dostępne:", dostepneProdukty);
console.log("Suma wartości:", sumaWartosci, "zł");
