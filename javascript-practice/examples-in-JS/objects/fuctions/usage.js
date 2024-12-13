const { Dog, twoSumSolver, library } = require("./objects");

const anotherDog = new Dog("Buddy", "Golden Retriever", 5, 30);
console.log(anotherDog);
anotherDog.eat();
anotherDog.bark();

const nums = [2, 7, 11, 15, 7, 2];
const target = 9;
console.log(twoSumSolver.findPairs(nums, target));

library.listAvailableBooks();
library.borrowBook("1984");
library.borrowBook("The Great Gatsby");
library.listAvailableBooks();
library.returnBook("The Great Gatsby");
library.listAvailableBooks();
