const shoppingList = require("./shoppingList");

const {
  getUnboughtItems,
  getTotalPrice,
  groupByCategory,
  markAsBought,
  sortByPrice,
} = require("./functions");

const unbought = getUnboughtItems(shoppingList);
console.log("Nie kupione produkty:", unbought);

const totalUnbought = getTotalPrice(unbought);
console.log("Suma cen produktów niekupionych:", totalUnbought);

const grouped = groupByCategory(shoppingList);
console.log("Produkty pogrupowane po kategorii:", grouped);

const listWithBoughtRolls = markAsBought(shoppingList, "bułki");
console.log("Lista z bułkami kupionymi:", listWithBoughtRolls);

const sorted = sortByPrice(shoppingList);
console.log("Produkty posortowane po cenie:", sorted);
