class IoTDeivce {
  constructor(deviceName, dviceType, location) {
    this.deviceName = deviceName;
    this.deviceType = dviceType;
    this.location = location;
    this.status = "offline";
    this.battertLevel = 100;
  }

  powerOn() {
    this.status = "online";
    console.log(`${this.deviceName} is now ${this.status}`);
  }

  powerOff() {
    this.status = "offline";
    console.log(`${this.deviceName} is now ${this.status}`);
  }

  checkStatus() {
    console.log(`${this.deviceName} is currently ${this.status}`);
  }

  useBattery() {
    if (this.batteryLevel > 0) {
      this.batteryLevel -= 10;
      console.log(`${this.deviceName} is now at ${this.batteryLevel}%`);
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
const smartLight = new IoTDeivce("Smart Light", "Lighting", "Living Room");

smartLight.displayDetails();
smartLight.powerOn();
smartLight.checkStatus();
smartLight.useBattery();
smartLight.useBattery();
smartLight.recharge();
smartLight.displayDetails();
