function generatePINPermutations(length = 4) {
  const startTime = performance.now();
  const possibleDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const totalCombinations = Math.pow(10, length);

  console.log(`=== PIN Permutation Generator (${length}-digit) ===`);
  console.log(`Started: ${new Date().toISOString()}`);
  console.log(
    `Total possible combinations: ${totalCombinations.toLocaleString()}`
  );

  const MAX_DISPLAY = 20;

  const sampleRanges = [
    { start: 0, count: 5, label: "First few" },
    { start: Math.floor(totalCombinations / 2), count: 5, label: "Middle" },
    { start: totalCombinations - 5, count: 5, label: "Last few" },
    {
      pins: ["1234", "0000", "1111", "2580", "5683"],
      label: "Common PINs (example)",
    },
  ];

  const padWithZeros = (num) => num.toString().padStart(length, "0");

  sampleRanges.forEach((range) => {
    console.log(`\n${range.label}:`);

    if (range.pins) {
      range.pins.forEach((pin) => {
        console.log(`  ${pin} (example of commonly used PIN)`);
      });
    } else {
      for (let i = 0; i < range.count; i++) {
        const pinNumber = range.start + i;
        console.log(
          `  ${padWithZeros(pinNumber)} (would be combination #${
            pinNumber + 1
          })`
        );
      }
    }
  });

  const endTime = performance.now();
  console.log(
    `\nSample generation completed in ${((endTime - startTime) / 1000).toFixed(
      2
    )} seconds`
  );

  console.log(`\nImportant notes:`);
  console.log(
    `1. Modern devices implement delays and lockouts after multiple failed attempts`
  );
  console.log(`2. Most phones lock completely after 10 failed attempts`);
  console.log(
    `3. With 10 attempts per ${length}-digit PIN, odds of guessing correctly: 1 in ${(
      totalCombinations / 10
    ).toLocaleString()}`
  );

  return {
    length,
    totalCombinations,
    timeElapsed: (endTime - startTime) / 1000,
    example: function (start, count) {
      const result = [];
      for (let i = 0; i < count; i++) {
        if (start + i < totalCombinations) {
          result.push(padWithZeros(start + i));
        }
      }
      return result;
    },
  };
}

const demo = generatePINPermutations(4);
console.log("Example of 5 sequential PINs from position 500:");
console.log(demo.example(500, 5));

console.log("\n=== Security comparison ===");
const sixDigitDemo = generatePINPermutations(6);
