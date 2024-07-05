let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
  console.log(fruit);
});

for (let fruit of fruits) {
  console.log(fruit);
}
let cars = ["BMW", "Audi", "Mercedes"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
cars.forEach(function (car) {
  console.log(car);
});
