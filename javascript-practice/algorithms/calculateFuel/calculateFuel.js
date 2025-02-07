function calculateFuel(distance, consumption) {
  const fuelPrice = 5.84;
  const tankCapacity = 70;

  let fuelNeeded = (distance * consumption) / 100;

  let cost = fuelNeeded * fuelPrice;

  let isTankEnough = fuelNeeded <= tankCapacity ? "Yes" : "No";

  return {
    fuelNeeded: fuelNeeded.toFixed(2) + " L",
    cost: cost.toFixed(2) + " zł",
    isTankEnough,
  };
}

console.log(calculateFuel(500, 8));
