const pi = Math.PI;

const additionResults = [1 + 2, 3 + 4, 5 + 6];
const subtractionResults = [10 - 2, 20 - 5, 30 - 10];
const multiplicationResults = [2 * 3, 4 * 5, 6 * 7];
const divisionResults = [10 / 2, 20 / 4, 30 / 5];

function addPiToResults(results) {
  return results.map((result) => result + pi);
}

const additionWithPi = addPiToResults(additionResults);
const subtractionWithPi = addPiToResults(subtractionResults);
const multiplicationWithPi = addPiToResults(multiplicationResults);
const divisionWithPi = addPiToResults(divisionResults);
