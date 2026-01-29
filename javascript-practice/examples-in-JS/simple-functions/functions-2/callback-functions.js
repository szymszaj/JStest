// FUNKCJE CALLBACK

function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squared = processArray(numbers, (num) => num ** 2);
console.log(squared);

const doubled = processArray(numbers, (num) => num * 2);
console.log(doubled);

function delayedGreeting(name, callback) {
  setTimeout(() => {
    callback(`Cześć, ${name}!`);
  }, 1000);
}

delayedGreeting("Anna", (message) => {
  console.log(message);
});
