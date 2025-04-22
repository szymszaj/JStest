const conversions = {
  length: {
    meter: { baseConversion: 1 },
    foot: { baseConversion: 0.3048 },
    inch: { baseConversion: 0.0254 },
  },
  temperature: {
    celsius: {
      toBase: (temp) => temp,
      fromBase: (temp) => temp,
    },
    fahrenheit: {
      toBase: (temp) => (temp - 32) * (5 / 9),
      fromBase: (temp) => temp * (9 / 5) + 32,
    },
    kelvin: {
      toBase: (temp) => temp - 273.15,
      fromBase: (temp) => temp + 273.15,
    },
  },
  mass: {
    kilogram: { baseConversion: 1 },
    pound: { baseConversion: 0.453592 },
    gram: { baseConversion: 0.001 },
  },
};

function convert(args) {
  try {
    const [value, fromUnit, toUnit] = args;

    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      throw new Error("Invalid number provided.");
    }

    const fromUnitLower = fromUnit.toLowerCase();
    const toUnitLower = toUnit.toLowerCase();

    const unitType = findUnitType(fromUnitLower, toUnitLower);
    if (!unitType) {
      throw new Error(
        `Cannot convert between ${fromUnit} and ${toUnit}. Units are incompatible or not supported.`
      );
    }

    let result;
    if (unitType === "temperature") {
      const fromConv = conversions[unitType][fromUnitLower];
      const toConv = conversions[unitType][toUnitLower];
      result = toConv.fromBase(fromConv.toBase(numValue));
    } else {
      const fromConv = conversions[unitType][fromUnitLower];
      const toConv = conversions[unitType][toUnitLower];
      const baseValue = numValue * fromConv.baseConversion;
      result = baseValue / toConv.baseConversion;
    }

    return `${value} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

function findUnitType(fromUnit, toUnit) {
  for (const type in conversions) {
    if (fromUnit in conversions[type] && toUnit in conversions[type]) {
      return type;
    }
  }
  return null;
}
