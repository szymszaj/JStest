const person = { name: "John", age: 30, city: "New York" };
const { name, age } = person;
console.log(name, age);

const arr = [1, 2, 3, 4, 5];
const newArr = [...arr, 6, 7, 8];
console.log(newArr);

const exampleBin = (a, b) => a + b;
console.log(add(2, 5));

console.log(exampleBin);

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};
fetchData();
