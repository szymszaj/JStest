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
  dogName,
  dogAge,
  hobby,
};

const user = {
  name: "Simon",
  lastName: "Oxl",
  age: 55,
  hobby: "cars",
  job: "car mechanict",
  showName() {
    console.log(this.name, this.age);
  },
};
user.showName();

class User {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.hello = function () {
      console.log(`Hi ${this.name}I like my job and I work in ${this.job}`);
    };
  }
}
const firstUser = new User("Lily", 32, "boss");

firstUser.hello();

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  showName() {
    console.log(this.name);
  }
}
const person1 = new Person("Simon", 33, "developer");
