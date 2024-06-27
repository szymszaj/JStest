let person = {
  firstName: "John",
  lastName: "Doee",
  age: 22,
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
};

const newUser = {
  namm: "Joe",
  age: 21,
  car: {
    brand: " Audi",
    model: "q5",
    color: "red",
  },
};

const oldUser = {
  namm: "Anna",
  age: 44,
  
};
console.log(`${newUser.namm} chodzi do domu ${oldUser.namm} i ma ${newUser.age} lat `);
