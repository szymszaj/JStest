function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even.`;
  } else {
    return `${number} is odd.`;
  }
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
