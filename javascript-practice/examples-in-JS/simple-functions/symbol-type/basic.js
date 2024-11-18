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

let calculateSecretValue = Symbol("calculateSecretValue");

let secretAgent = {
  name: "Agent Smith",
  mission: "Classified",
  [calculateSecretValue]() {
    return this.name + " - Secret Value: 007";
  },
};

console.log(secretAgent.name);
console.log(secretAgent.mission);

console.log(secretAgent[calculateSecretValue]());

console.log(secretAgent.calculateSecretValue);
