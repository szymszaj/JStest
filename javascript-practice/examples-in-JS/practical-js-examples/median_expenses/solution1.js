function solution1(expenses) {
  let result = {};

  for (let month in expenses) {
    let dayExpenses = [];

    for (let day in expenses[month]) {
      if (parseInt(day) <= 7) {
        let categories = expenses[month][day];
        for (let category in categories) {
          dayExpenses = dayExpenses.concat(categories[category]);
        }
      }
    }

    if (dayExpenses.length > 0) {
      result[month] = median(dayExpenses);
    } else {
      result[month] = null;
    }
  }

  return result;
}

function median(arr) {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}
