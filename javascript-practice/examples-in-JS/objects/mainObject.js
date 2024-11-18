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

class User {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  hello() {
    console.log(`Hi ${this.name}, I like my job and I work in ${this.job}`);
  }
}

const me = new Person("Simon", 33, "developer");
const user1 = new User("Lily", 32, "boss");

const advancedObject = {
  ...me,
  ...user1,
  showName: me.showName,
  hello: user1.hello,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "Poland",
  },
  hobbies: ["coding", "reading", "gaming"],
  skills: {
    programming: ["JavaScript", "Python", "C++"],
    languages: ["English", "Polish"],
  },
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Job: ${this.job}`);
    console.log(
      `Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`
    );
    console.log(`Hobbies: ${this.hobbies.join(", ")}`);
    console.log(
      `Skills: Programming - ${this.skills.programming.join(
        ", "
      )}, Languages - ${this.skills.languages.join(", ")}`
    );
  },
  addHobby(hobby) {
    this.hobbies.push(hobby);
    console.log(`Added hobby: ${hobby}`);
  },
  addSkill(category, skill) {
    if (this.skills[category]) {
      this.skills[category].push(skill);
      console.log(`Added skill: ${skill} to category: ${category}`);
    } else {
      console.log(`Category ${category} does not exist.`);
    }
  },
};

advancedObject.showName();
advancedObject.hello();
advancedObject.displayInfo();
advancedObject.addHobby("hiking");
advancedObject.addSkill("programming", "Java");
advancedObject.displayInfo();
