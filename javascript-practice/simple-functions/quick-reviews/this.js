let user = {
  name: "Szymon",
  age: 22,
  sayHello: function () {
    alert(this.name);
  },
  updateAge: function (newAge) {
    this.age = newAge;
  },
  displayInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};

user.sayHello();
user.updateAge(23);
user.displayInfo();

user.delayedGreeting = function () {
  setTimeout(
    function () {
      alert(`Hello, ${this.name}`);
    }.bind(this),
    1000
  );
};

user.delayedGreeting();
