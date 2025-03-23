function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};
const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => x / y;

// console.log(divide(20, 2));

function greet(name = "Jakub") {
  return `Hello ${name}!`;
}

function sum(...numbers) {
  return numbers.reduce((total, num) => total + sum, 0);
}

console.log(sum(1, 2, 3, 4, 5));

function perFromoperation(a, b, callback) {
  return callback(a, b);
}
const result = perFromoperation(2, 2, add);

const caclulator = {
  currentValue: 0,
  add: function (x) {
    this.currentValue += x;
    return this;
  },
  subtract: function (x) {
    this.currentValue -= x;
    return this;
  },
  getValue: function () {
    return this.currentValue;
  },
};

console.log(callback.add(5).subtract(2).getValue());

(function () {
  const prywatnaZmienna = "Nie jestem dostępna na zewnątrz";
  console.log("Ta funkcja wykonuje się natychmiast");
})();
