const hotels = [
  { city: "Warsaw", price: 350 },
  { city: "Krakow", price: 300 },
  { city: "Gdansk", price: 250 },
  { city: "Wroclaw", price: 400 },
  { city: "Poznan", price: 320 },
  { city: "Sopot", price: 500 },
];
function sortAndDisplayHotels(order) {
  if (order === "most expensive") {
    hotels.sort((a, b) => b.price - a.price);
    console.log("Most expensive hotels:");
  } else if (order === "cheapest") {
    hotels.sort((a, b) => a.price - b.price);
    console.log("Cheapest hotels:");
  } else {
    console.log("Invalid command. Choose 'most expensive' or 'cheapest'.");
    return;
  }

  hotels.forEach((hotel) => {
    console.log(`${hotel.city}: ${hotel.price} PLN/night`);
  });
}

sortAndDisplayHotels("cheapest"); // Shows the cheapest hotels
sortAndDisplayHotels("most expensive"); // Shows the most expensive hotels
