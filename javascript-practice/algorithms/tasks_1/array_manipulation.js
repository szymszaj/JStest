const numbers = [5, 10, 3, 8, 15, 4, 7, 12];

console.log("Original array:", numbers);

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of all numbers:", sum);

const maxNumber = Math.max(...numbers);
console.log("Largest number:", maxNumber);

const minNumber = Math.min(...numbers);
console.log("Smallest number:", minNumber);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

const largeNumbers = numbers.filter((number) => number > 7);
console.log("Numbers greater than 7:", largeNumbers);

const doubledNumbers = numbers.map((number) => number * 2);
console.log("Doubled numbers:", doubledNumbers);

const formattedNumbers = numbers.map((number) => `Item: ${number}`);
console.log("Formatted numbers:", formattedNumbers);

const sumOfDoubledEven = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2)
  .reduce((sum, number) => sum + number, 0);
console.log("Sum of doubled even numbers:", sumOfDoubledEven);

const sortedAscending = [...numbers].sort((a, b) => a - b);
console.log("Sorted ascending:", sortedAscending);

const sortedDescending = [...numbers].sort((a, b) => b - a);
console.log("Sorted descending:", sortedDescending);

const shoppingCart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Phone", price: 800, quantity: 2 },
  { id: 3, name: "Headphones", price: 100, quantity: 3 },
  { id: 4, name: "Keyboard", price: 50, quantity: 1 },
];

const totalPrice = shoppingCart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log("Shopping cart:", shoppingCart);
console.log("Total price:", totalPrice);

const mostExpensiveItem = shoppingCart.reduce((maxItem, currentItem) => {
  return currentItem.price > maxItem.price ? currentItem : maxItem;
}, shoppingCart[0]);

console.log("Most expensive item:", mostExpensiveItem.name);

const highValueItems = shoppingCart.filter(
  (item) => item.price * item.quantity > 1000
);
console.log("High value items:", highValueItems);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const primeNumbers = numbers.filter(isPrime);
console.log("Prime numbers:", primeNumbers);
