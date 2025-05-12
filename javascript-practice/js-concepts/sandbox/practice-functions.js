function calculateSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}

function testCalculateSum() {
  const testArray = [1, 2, 3, 4, 5];
  const result = calculateSum(testArray);

  console.log(`Test: [${testArray.join(", ")}] wynosi: ${result}`);
}

testCalculateSum();
