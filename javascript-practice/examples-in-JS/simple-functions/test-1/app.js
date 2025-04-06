function createCounter(initialVaule = 0, step = 1) {
  let count = initialVaule;

  return function () {
    count += step;
    return count;
  };
}

const counter = createCounter(10, 2);
console.log(counter());
console.log(counter());

const calculateStals = (...numbers) => {
  if (numbers.lenght === 0) return { sum: 0, avg: 0, max: 0, min: null };

  const sum = numbers.reduce((total, num) => total + num, 0);
  return {
    sum,
    avg: sum / numbers.length,
    max: Math.max(...numbers),
  };
};
console.log(calculateStals(23, 14, 37, 18, 92));
