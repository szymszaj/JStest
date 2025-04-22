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

function listAvailableConversions() {
  let result = "Available conversions:\n";

  for (const type in conversions) {
    result += `\n${type.toUpperCase()}:\n`;
    const units = Object.keys(conversions[type]);
    result += `  Units: ${units.join(", ")}\n`;
  }

  return result;
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
Usage: node conversions.js <value> <fromUnit> <toUnit>

Examples:
  node conversions.js 100 celsius fahrenheit
  node conversions.js 5.5 meter foot
  node conversions.js 10 pound kilogram
  
Use --list to see all available conversions.
    `);
    return;
  }

  if (args.includes("--list") || args.includes("-l")) {
    console.log(listAvailableConversions());
    return;
  }

  if (args.length !== 3) {
    console.error("Usage: node conversions.js <value> <fromUnit> <toUnit>");
    console.error("Try --help for more information.");
    process.exit(1);
  }

  const result = convert(args);
  if (result) {
    console.log(result);
  } else {
    process.exit(1);
  }
}

main();
