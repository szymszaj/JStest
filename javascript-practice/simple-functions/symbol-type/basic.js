let engineId = Symbol("engineId");

let car = {
  brand: "Toyota",
  model: "Corolla",
  [engineId]: 12345,
};

console.log(car.brand);
console.log(car.model);
console.log(car[engineId]);

console.log(car["engineId"]);
