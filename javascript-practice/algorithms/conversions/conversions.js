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
