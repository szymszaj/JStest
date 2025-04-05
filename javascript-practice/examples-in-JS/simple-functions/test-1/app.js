const add = (a, b) => a + b;
console.log((3, 2));

const processArray = (array, minValue) => {
  const filteredValues = array.filter((item) => item > minValue);
  const sqares = filteredValues.map((item) => (item = item * item));

  const sum = sqares.reduce((total, current) => total + current, 0);

  return {
    orginal: array,
    filtered: filteredValues,
    squares: sqares,
    sum: sum,
  };
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = processArray(numbers, 5);
console.log(result);
