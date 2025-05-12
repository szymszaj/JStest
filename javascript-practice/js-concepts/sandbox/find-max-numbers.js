function findMaxNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

function testFindMaxNumber() {
  const testCases = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 3, 2, 5, 4],
    [10, 20, 30, 40, 50],
    [-1, -2, -3, -4, -5],
    [0, 0, 0, 0],
    [],
  ];

  testCases.forEach((testArray, index) => {
    const result = findMaxNumbers(testArray);
    console.log(
      `Test ${index + 1}: Największa liczba w tablicy [${testArray.join(
        ", "
      )}] to: ${result}`
    );
  });
}

testFindMaxNumber();
