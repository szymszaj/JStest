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

class IoTDevice {
  constructor(deviceName, deviceType, location) {
    this.deviceName = deviceName;
    this.deviceType = deviceType;
    this.location = location;
    this.status = "offline";
    this.batteryLevel = 100;
  }

  powerOn() {
    this.status = "online";
    console.log(`${this.deviceName} is now ${this.status}.`);
  }

  powerOff() {
    this.status = "offline";
    console.log(`${this.deviceName} is now ${this.status}.`);
  }

  checkStatus() {
    console.log(`${this.deviceName} is currently ${this.status}.`);
  }

  useBattery() {
    if (this.batteryLevel > 0) {
      this.batteryLevel -= 10;
      console.log(
        `${this.deviceName} battery level is now ${this.batteryLevel}%.`
      );
    } else {
      console.log(`${this.deviceName} has no battery left. Please recharge.`);
      this.powerOff();
    }
  }

  recharge() {
    this.batteryLevel = 100;
    console.log(`${this.deviceName} is fully recharged.`);
  }

  displayDetails() {
    console.log(`Device: ${this.deviceName}`);
    console.log(`Type: ${this.deviceType}`);
    console.log(`Location: ${this.location}`);
    console.log(`Status: ${this.status}`);
    console.log(`Battery Level: ${this.batteryLevel}%`);
  }
}

const smartLight = new IoTDevice("Smart Light", "Lighting", "Living Room");

smartLight.displayDetails();
smartLight.powerOn();
smartLight.checkStatus();
smartLight.useBattery();
smartLight.useBattery();
smartLight.recharge();
smartLight.displayDetails();
