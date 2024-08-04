const myArray = [
  10,
  3.14,
  "hello",
  false,
  null,
  undefined,
  { key: "value" },
  [4, 5, 6],
  function () {
    console.log("This is a function in the array!");
  },
  new Date("2023-01-01"),
  42,
  1500,
  "world",
];

const integers = myArray.filter(
  (item) => typeof item === "number" && Number.isInteger(item)
);

console.log(integers);

myArray.forEach((item, index) => {
  console.log(`Element at index ${index}:`, item);
});

function modifyIntegers(array) {
  return array.map((item) => {
    if (typeof item === "number" && Number.isInteger(item)) {
      if (item < 20) {
        return item * 2;
      } else if (item > 1000) {
        return 1000;
      }
    }
    return item;
  });
}
const modifiedArray = modifyIntegers(myArray);

console.log("Modified Array:", modifiedArray);

modifiedArray.forEach((item, index) => {
  console.log(`Element at index ${index}:`, item);
});
