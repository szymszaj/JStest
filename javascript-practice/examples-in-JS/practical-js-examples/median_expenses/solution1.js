function solution1(expenses) {
  let result = {};

  // Iterujemy po miesiącach
  for (let month in expenses) {
    let dayExpenses = [];

    // Iterujemy po dniach w miesiącu
    for (let day in expenses[month]) {
      // Zbieramy dane tylko do pierwszej niedzieli (dni 1-7)
      if (parseInt(day) <= 7) {
        // Zbieramy wszystkie wydatki dla tego dnia
        let categories = expenses[month][day];
        for (let category in categories) {
          dayExpenses = dayExpenses.concat(categories[category]);
        }
      }
    }

    // Obliczamy medianę, jeśli są jakieś wydatki
    if (dayExpenses.length > 0) {
      result[month] = median(dayExpenses);
    } else {
      result[month] = null;
    }
  }

  return result;
}

// Funkcja do obliczania mediany
function median(arr) {
  arr.sort((a, b) => a - b); // Sortowanie rosnąco
  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}
