const myArray = {
  item1: 10,
  item2: 3.14,
  item3: "hello",
  item4: false,
  item5: null,
  item6: undefined,
  item7: { key: "value" },
  item8: [4, 5, 6],
  item9: function () {
    console.log("This is a function in the array!");
  },
  item10: new Date("2023-01-01"),
  item11: 42,
  item12: 1500,
  item13: "world",
};

const integers = Object.values(myArray).filter(
  (item) => typeof item === "number" && Number.isInteger(item)
);

console.log(integers);

Object.entries(myArray).forEach(([key, item]) => {
  console.log(`Element at key ${key}:`, item);
});

function modifyIntegers(obj) {
  const newObj = {};
  for (const [key, item] of Object.entries(obj)) {
    if (typeof item === "number" && Number.isInteger(item)) {
      if (item < 20) {
        newObj[key] = item * 2;
      } else if (item > 1000) {
        newObj[key] = 1000;
      } else {
        newObj[key] = item;
      }
    } else {
      newObj[key] = item;
    }
  }
  return newObj;
}

const modifiedArray = modifyIntegers(myArray);

console.log("Modified Array:", modifiedArray);

Object.entries(modifiedArray).forEach(([key, item]) => {
  console.log(`Element at key ${key}:`, item);
});

const myArray1 = {
  item1: 5,
  item2: 15,
  item3: 25,
  item4: 35,
  item5: 45,
  item6: 1050,
  item7: "hello",
  item8: true,
  item9: null,
};

console.log(integers);

Object.entries(myArray1).forEach(([key, item]) => {
  console.log(`Element at key ${key}:`, item);
});

const modifiedArray1 = modifyIntegers(myArray1);

console.log("Modified Array:", modifiedArray1);

Object.entries(modifiedArray1).forEach(([key, item]) => {
  console.log(`Element at key ${key}:`, item);
});
