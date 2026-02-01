const isAdult = (age) => age >= 18;
const isEven = (num) => num % 2 === 0;
const isPalindrome = (str) => str === str.split("").reverse().join("");

console.log(isAdult(20));
console.log(isAdult(15));

console.log(isEven(7));
console.log(isEven(10));

console.log(isPalindrome("kajak"));
console.log(isPalindrome("hello"));

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrime(7));
console.log(isPrime(10));
