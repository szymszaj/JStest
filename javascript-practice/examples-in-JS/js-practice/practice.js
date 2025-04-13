function calculateSum(a, b) {
  return a + b;
}

console.log("suma 2  i3 to:", calculateSum(2, 3));

console.log("for");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const exoticFruis = ["banana", "mango", "kiwi"];
console.log("Lista owoców");
exoticFruis.forEach((fruit, index) => {
  console.log(`Owoc ${index + 1}: ${fruit}`);
});

const personInJob = {
  name: "John",
  age: 30,
  job: "developer",
  greet: function () {
    console.log(`Cześć, jestem ${this.name} i mam ${this.age} lat.`);
  },
};

personInJob.greet();

function checNumber(num) {
  if (num > 0) {
    console.log(`${num} jest liczbą dodatnią`);
  } else if (num < 0) {
    console.log(`${num} jest liczbą ujemną`);
  } else {
    console.log(`${num} jest zerem`);
  }
}
checkNumber(-5);
checkNumber(0);
checkNumber(10);
