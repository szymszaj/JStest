const groupBy = (arr, keyFn) =>
  arr.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] ??= []).push(item);
    return acc;
  }, {});

const min = (arr) => Math.min(...arr);
const max = (arr) => Math.max(...arr);
