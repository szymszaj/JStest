const adultNames = (people) =>
  people.filter((person) => person.age > 18).map((person) => person.name);

const permutations = (arr) =>
  arr.length === 0
    ? [[]]
    : arr.flatMap((v, i) =>
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((p) => [
          v,
          ...p,
        ])
      );

console.log(
  adultNames([
    { name: "Adam", age: 15 },
    { name: "Ania", age: 22 },
    { name: "Jan", age: 30 },
  ])
);

console.log(permutations([1, 2, 3]));

const adultNames1 = (people) =>
  Array.isArray(people)
    ? people.reduce((acc, person) => {
        if ((person.age ?? 0) > 18 && person.name) acc.push(person.name);
        return acc;
      }, [])
    : [];

function* permutations(arr, n = arr.length) {
  if (n <= 1) {
    yield arr.slice();
  } else {
    for (let i = 0; i < n; i++) {
      yield* permutations(arr, n - 1);
      if (n % 2 === 0) {
        [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
      } else {
        [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
      }
    }
  }
}

console.log(
  adultNames([
    { name: "Adam", age: 15 },
    { name: "Ania", age: 22 },
    { name: "Jan", age: 30 },
  ])
);

console.log([...permutations([1, 2, 3])]);
