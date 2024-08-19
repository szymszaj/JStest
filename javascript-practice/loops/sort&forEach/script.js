const hotelsPoland = [
  { city: "Warsaw", price: 350 },
  { city: "Krakow", price: 300 },
  { city: "Gdansk", price: 250 },
  { city: "Wroclaw", price: 400 },
  { city: "Poznan", price: 3220 },
  { city: "Sopot", price: 500 },
];

const hotelsGermany = [
  { city: "Berlin", price: 50 },
  { city: "Munich", price: 1200 },
  { city: "Hamburg", price: 3480 },
  { city: "Frankfurt", price: 370 },
  { city: "Cologne", price: 410 },
];

const hotelsFrance = [
  { city: "Paris", price: 550 },
  { city: "Nice", price: 480 },
  { city: "Lyon", price: 420 },
  { city: "Marseille", price: 4020 },
  { city: "Bordeaux", price: 380 },
];

const allHotels = [...hotelsPoland, ...hotelsGermany, ...hotelsFrance];

function sortAndDisplayHotels(order, countryHotels = allHotels) {
  if (order === "most expensive") {
    countryHotels.sort((a, b) => b.price - a.price);
    console.log("Most expensive hotels:");
  } else if (order === "cheapest") {
    countryHotels.sort((a, b) => a.price - b.price);
    console.log("Cheapest hotels:");
  } else {
    console.log("Invalid command. Choose 'most expensive' or 'cheapest'.");
    return;
  }

  countryHotels.forEach((hotel) => {
    console.log(`${hotel.city}: ${hotel.price} PLN/night`);
  });
}

function compareHotels() {
  console.log("Comparing cheapest hotels across all countries:");
  sortAndDisplayHotels("cheapest");

  console.log("\nComparing most expensive hotels across all countries:");
  sortAndDisplayHotels("most expensive");
}

sortAndDisplayHotels("cheapest", hotelsPoland);
sortAndDisplayHotels("most expensive", hotelsGermany);
compareHotels();
