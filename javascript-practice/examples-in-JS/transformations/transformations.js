const {
  pipe, compose, toSnakeCase, toKebab, toCamel,
  capitalize, titleCase, toSlug, pick, omit,
  groupBy, buildTree, flatten
} = require("./transform_utils");

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log("Podwojone:", doubled);

const evenSquared = numbers.filter(n => n % 2 === 0).map(n => n ** 2);
console.log("Parzyste do kwadratu:", evenSquared);

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Suma:", sum);

const nested = [[1, 2], [3, 4]];
const flatDoubled = nested.flatMap(arr => arr.map(n => n * 2));
console.log("Flat + doubled:", flatDoubled);

const user = {
  firstName: "Jan",
  lastName: "Kowalski",
  age: 25,
  city: "Warszawa"
};

const snakeCaseUser = Object.fromEntries(
  Object.entries(user).map(([key, val]) => [toSnakeCase(key), val])
);
console.log("Snake case:", snakeCaseUser);

console.log("Pick:", pick(user, ["firstName", "age"]));
console.log("Omit:", omit(user, ["age", "city"]));

const users = [
  { id: 1, name: "Anna", role: "admin" },
  { id: 2, name: "Tomek", role: "user" },
  { id: 3, name: "Kasia", role: "admin" },
];

const usersById = Object.fromEntries(users.map(u => [u.id, u]));
console.log("Users by ID:", usersById);

console.log("Grouped by role:", groupBy(users, "role"));

const names = users.map(u => u.name);
console.log("Names:", names);

const text = "hello world";
console.log("Capitalize:", capitalize(text));
console.log("Title case:", titleCase(text));
console.log("Kebab:", toKebab("myVariableName"));
console.log("Camel:", toCamel("my-variable-name"));
console.log("Slug:", toSlug("Hello World! 123"));

const categories = [
  { id: 1, name: "Elektronika", parentId: null },
  { id: 2, name: "Telefony", parentId: 1 },
  { id: 3, name: "Laptopy", parentId: 1 },
  { id: 4, name: "iPhone", parentId: 2 },
  { id: 5, name: "Samsung", parentId: 2 },
];

console.log("Tree:", JSON.stringify(buildTree(categories), null, 2));

const tree = buildTree(categories);
console.log("Flattened:", flatten(tree).map(c => `${"  ".repeat(c.depth)}${c.name}`).join("\n"));

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x ** 2;

const transform = pipe(addOne, double, square);
console.log("Pipe (5 -> +1 -> *2 -> ^2):", transform(5));

const transform2 = compose(square, double, addOne);
console.log("Compose (5 -> +1 -> *2 -> ^2):", transform2(5));

async function transformAsync() {
  const urls = ["user/1", "user/2", "user/3"];
  const fetchUser = async (url) => ({ id: url.split("/")[1], fetched: true });
  const results = await Promise.all(urls.map(fetchUser));
  console.log("Async transform:", results);
}

transformAsync();
