let user = {
  name: "Szymon",
  age: 22,
  hobbies: ["reading", "gaming", "coding"],
  sayHello: function () {
    alert(this.name);
  },
  updateAge: function (newAge) {
    this.age = newAge;
  },
  displayInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
  listHobbies: function () {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} enjoys ${hobby}`);
    });
  },
  delayedGreeting: function () {
    setTimeout(() => {
      alert(`Hello, ${this.name}`);
    }, 1000);
  },
};

user.sayHello();
user.updateAge(23);
user.displayInfo();
user.listHobbies();
user.delayedGreeting();
