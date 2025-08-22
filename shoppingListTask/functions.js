function getUnboughtItems(list) {
  return list.filter((item) => item.bougth);
}

function getTotalPrice(list) {
  return list.reduce((acc, item) => acc + item.price, 0);
}

function groupByCategory(list) {
  return list.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
}

function markAsBought(list, productName) {
  return list.map((item) =>
    item.name === productName ? { ...item, bought: true } : item
  );
}

function sortByPrice(list) {
  return [...list].sort((a, b) => a.price - b.price);
}

module.exports = {
  getUnboughtItems,
  getTotalPrice,
  groupByCategory,
  markAsBought,
  sortByPrice,
};
