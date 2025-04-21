const conversions = {
  length: {
    meter: { toMeter: 1, toUnit: 1 },
    foot: { toMeter: 0.3048, toUnit: 1 / 0.3048 },
    inch: { toMeter: 0.0254, toUnit: 1 / 0.0254 },
  },
  temperature: {
    celsius: {
      toCelsius: (temp) => temp,
      fromCelsius: (temp) => temp,
    },
    fahrenheit: {
      toCelsius: (temp) => (temp - 32) * (5 / 9),
      fromCelsius: (temp) => temp * (9 / 5) + 32,
    },
    kelvin: {
      toCelsius: (temp) => temp - 273.15,
      fromCelsius: (temp) => temp + 273.15,
    },
  },
  mass: {
    kilogram: { toKilogram: 1, toUnit: 1 },
    pound: { toKilogram: 0.453592, toUnit: 1 / 0.453592 },
  },
};

function convert(args) {
  const [value, fromUnit, toUnit] = args;

  const numValue = parseFloat(value);
  if (isNaN(numValue)) {
    console.error("Invalid number provided.");
    process.exit(1);
  }

  const unitType = findUnitType(fromUnit, toUnit);
  if (!unitType) {
    console.error("Invalid or mismatched units provided.");
    process.exit(1);
  }

  let result;
  if (unitType === "temperature") {
    const fromConv = conversions[unitType][fromUnit.toLowerCase()];
    const toConv = conversions[unitType][toUnit.toLowerCase()];
    result = toConv.fromCelsius(fromConv.toCelsius(numValue));
  } else {
    const fromConv = conversions[unitType][fromUnit.toLowerCase()];
    const toConv = conversions[unitType][toUnit.toLowerCase()];
    const inBaseUnit = numValue * fromConv.toMeter || fromConv.toKilogram;
    result = inBaseUnit * toConv.toUnit;
  }

  console.log(`${value} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`);
}

function findUnitType(fromUnit, toUnit) {
  for (const type in conversions) {
    if (
      conversions[type][fromUnit.toLowerCase()] &&
      conversions[type][toUnit.toLowerCase()]
    ) {
      return type;
    }
  }
  return null;
}

const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error("Usage: node convert.js <value> <fromUnit> <toUnit>");
  process.exit(1);
}

convert(args);
