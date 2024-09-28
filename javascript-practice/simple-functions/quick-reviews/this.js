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

let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genres: ["Novel", "Historical", "Drama"],

  getSummary: function () {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
  },

  isClassic: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year > 50
      ? "Yes, it's a classic."
      : "No, it's not that old.";
  },

  listGenres: function () {
    this.genres.forEach((genre) => {
      console.log(`${this.title} belongs to ${genre} genre.`);
    });
  },
};

console.log(book.getSummary());
console.log(book.isClassic());
book.listGenres();

let car = {
  make: "Tesla",
  model: "Model S",
  year: 2020,
  color: "red",
  mileage: 15000,

  drive: function (distance) {
    this.mileage += distance;
    console.log(
      `You drove ${distance} km. Total mileage is now ${this.mileage} km.`
    );
  },

  repaint: function (newColor) {
    this.color = newColor;
    console.log(`The car has been repainted to ${this.color}.`);
  },

  displayInfo: function () {
    console.log(
      `Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}, Mileage: ${this.mileage} km.`
    );
  },
};
car.drive(500);
car.repaint("black");
car.displayInfo();
