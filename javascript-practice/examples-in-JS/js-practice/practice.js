function calculateSum(a, b) {
  return a + b;
}

console.log("The sum of 2 and 3 is:", calculateSum(2, 3));

console.log("for");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const exoticFruits = ["banana", "mango", "kiwi"];
console.log("List of fruits");
exoticFruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});

const personInJob = {
  name: "John",
  age: 30,
  job: "developer",
  greet: function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  },
};

personInJob.greet();

function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is a positive number`);
  } else if (num < 0) {
    console.log(`${num} is a negative number`);
  } else {
    console.log(`${num} is zero`);
  }
}
checkNumber(-5);
checkNumber(0);
checkNumber(10);
