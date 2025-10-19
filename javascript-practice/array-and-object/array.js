const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new set(withDuplicates)];
console.log(unique);

const nested = [[1, 2], [3, 4], [5]];
const flat = nested.flat();

const deepNested = [1, [2, [3, [4]]]];
const deepFlat = deepNested.flat(Infinity);
