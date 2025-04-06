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
