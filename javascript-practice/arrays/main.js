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
  "world",
];
const integers = myArray.filter(
  (item) => typeof item === "number" && Number.isInteger(item)
);
