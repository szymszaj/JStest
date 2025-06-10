class Person {
  constructor(
    firstName,
    lastName,
    birthDate,
    country = "Poland",
    hobbies = []
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.country = country;
    this.hobbies = hobbies;
  }
  getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const hasBirthdayPassed =
      today.getMonth() > this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() >= this.birthDate.getDate());
    if (!hasBirthdayPassed) {
      age--;
    }
    return age;
  }

  describe() {
    console.log(
      `Hi, my name is ${this.firstName} ${
        this.lastName
      }. I am ${this.getAge()} years old and I live in ${this.country}.`
    );
    if (this.hobbies.length) {
      console.log("My hobbies include:");
      this.hobbies.forEach((hobby) => console.log(`- ${hobby}`));
    } else {
      console.log("I currently have no hobbies.");
    }
  }

  addHobby(newHobby) {
    if (!this.hobbies.includes(newHobby)) {
      this.hobbies.push(newHobby);
      console.log(`Added new hobby: ${newHobby}`);
    } else {
      console.log(`Hobby "${newHobby}" already exists!`);
    }
  }
}

const person = new Person("po", "po", "1960-06-06", "UK", [
  "Traveling",
  "Computer games",
]);

person.describe();
person.addHobby("hiking");
person.describe();
