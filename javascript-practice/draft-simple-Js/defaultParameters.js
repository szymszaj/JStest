const greet = (name = "Szymon") => {
  return `Hello, ${name}!`;
};

console.log(greet("Szymon"));

const introduce = (name = "Szymon", age = 30, hobby = "programming") => {
  return `Hello, my name is ${name}, I am ${age} years old and I enjoy ${hobby}.`;
};

console.log(introduce("Szymon", 30, "programming"));
