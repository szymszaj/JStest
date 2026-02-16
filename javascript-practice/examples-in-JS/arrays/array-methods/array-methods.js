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

const dostepneProdukty = produkty.filter((produkt) => produkt.dostepny);

const nazwy = produkty.map((produkt) => produkt.nazwa);

const tanie = produkty.filter((produkt) => produkt.cena < 500);

const sumaWartosci = produkty.reduce((suma, produkt) => suma + produkt.cena, 0);

const wszystkieDostepne = produkty.every((produkt) => produkt.dostepny);

const mebel = produkty.find((produkt) => produkt.kategoria === "meble");

const posortowane = [...produkty].sort((a, b) => a.cena - b.cena);

console.log("Dostępne:", dostepneProdukty);
console.log("Suma wartości:", sumaWartosci, "zł");
