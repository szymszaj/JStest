function createUser(name, age = 18, country = "Polska") {
  return {
    name: name,
    age: age,
    country: country,
  };
}

console.log(createUser("Kasia"));
console.log(createUser("Tomek", 25));
console.log(createUser("Maria", 30, "Niemcy"));

const greetUser = (name, greeting = "Cześć") => {
  return `${greeting}, ${name}!`;
};
