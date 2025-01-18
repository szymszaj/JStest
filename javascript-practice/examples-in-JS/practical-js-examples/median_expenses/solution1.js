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

//Refactor
const median = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

function calculateMonthlyMedians(expenses) {
  const monthlyExpenses = {};

  expenses.forEach((expense) => {
    const [year, month] = expense.date.split("-");
    const monthKey = `${year}-${month}`;

    if (!monthlyExpenses[monthKey]) {
      monthlyExpenses[monthKey] = [];
    }

    monthlyExpenses[monthKey].push(expense.amount);
  });

  return Object.fromEntries(
    Object.entries(monthlyExpenses).map(([month, expenses]) => [
      month,
      expenses.length > 0 ? median(expenses) : null,
    ])
  );
}
