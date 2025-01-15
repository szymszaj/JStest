function solution2(expenses) {
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
      result[month] = quickSelect(
        dayExpenses,
        Math.floor(dayExpenses.length / 2)
      );
    } else {
      result[month] = null;
    }
  }

  return result;
}

// Funkcja QuickSelect do znalezienia k-tego najmniejszego elementu w tablicy
function quickSelect(arr, k) {
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  function select(arr, low, high, k) {
    if (low === high) {
      return arr[low];
    }

    let pivotIndex = partition(arr, low, high);
    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return select(arr, low, pivotIndex - 1, k);
    } else {
      return select(arr, pivotIndex + 1, high, k);
    }
  }

  return select(arr, 0, arr.length - 1, k);
}
