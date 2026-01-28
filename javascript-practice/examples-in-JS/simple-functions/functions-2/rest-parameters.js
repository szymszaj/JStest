// FUNKCJE Z REST PARAMETERS

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20));

function createFullName(firstName, lastName, ...titles) {
  return `${titles.join(" ")} ${firstName} ${lastName}`;
}

console.log(createFullName("Jan", "Kowalski", "Dr", "Prof."));
console.log(createFullName("Anna", "Nowak", "Mgr"));

const findMax = (...nums) => Math.max(...nums);
console.log(findMax(5, 12, 8, 3, 20));
