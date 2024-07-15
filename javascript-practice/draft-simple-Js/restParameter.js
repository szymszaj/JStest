const sum = (...numbers) => {
  return numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
};
console.log(sum(1, 2, 3));

const concatenateStrings = (...strings) => {
  return strings.reduce((acc, str) => acc + str, "");
};
console.log(concatenateStrings("Hello", " ", "world", "!"));
