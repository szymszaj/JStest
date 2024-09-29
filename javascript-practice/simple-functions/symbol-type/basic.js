let id = Symbol("id");

let user = {
  name: "John",
  [id]: 12345,
};

console.log(user[id]); // 12345
