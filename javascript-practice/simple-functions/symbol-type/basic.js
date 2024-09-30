let id = Symbol("id");

let user = {
  name: "John",
  [id]: 12345,
};

console.log(user[id]);

let id2 = Symbol("id");
let game = {
  name: "Chess",
  [id2]: "pass",
};
console.log(game[id2]);
