let person = {
  firstName: "John",
  lastName: "Doee",
  age: 22,
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
};

const dogName = "Drops";
const dogAge = 6;
const hobby = "gnaw wood";

const dog = {
  // name: dogName,
  // age: dogAge,
  dogName,
  dogAge,
  hobby,
};
