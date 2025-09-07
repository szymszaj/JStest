import * as math from "./mathUtils.js";
import * as string from "./stringUtils.js";
import * as array from "./arrayUtils.js";

console.log("=== Math Utils ===");
console.log("Średnia:", math.getAverage([1, 2, 3, 4, 5]));
console.log("Maks:", math.getMax([1, 2, 3, 4, 5]));
console.log("Min:", math.getMin([1, 2, 3, 4, 5]));
console.log("Silnia(5):", math.factorial(5));

console.log("\n=== String Utils ===");
console.log("Capitalize:", string.capitalize("kajak"));
console.log("Reverse:", string.reverse("hello"));
console.log("Palindrome (Kajak):", string.isPalindrome("Kajak"));
console.log("Ilość słów:", string.countWords("To jest przykładowe zdanie"));

console.log("\n=== Array Utils ===");
console.log("Unique:", array.getUnique([1, 1, 2, 3]));
console.log("Chunk:", array.chunkArray([1, 2, 3, 4, 5], 2));
console.log("Flatten:", array.flattenArray([[1, 2], [3, 4], [5]]));
console.log("Shuffle:", array.shuffleArray([1, 2, 3, 4, 5]));
