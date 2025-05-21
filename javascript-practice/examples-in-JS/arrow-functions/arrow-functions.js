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
