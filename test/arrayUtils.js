function unique(arr) {
  return [...new Set(arr)];
}

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

module.exports = {
  unique,
  chunk,
  flatten,
  shuffle,
};
