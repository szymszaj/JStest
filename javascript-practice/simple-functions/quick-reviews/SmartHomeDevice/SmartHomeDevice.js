class SmartHomeDevice {
  /**
   * Create a smart home device.
   * @param {string} deviceName - The name of the device.
   * @param {string} deviceType - The type of the device.
   * @param {string} location - The location of the device.
   */
  constructor(deviceName, deviceType, location) {
    this.deviceName = deviceName;
    this.deviceType = deviceType;
    this.location = location;
    this.status = "offline";
    this.batteryLevel = 100;
    this.powerSavingMode = false;
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
      this.batteryLevel -= this.powerSavingMode ? 5 : 10;
      console.log(`${this.deviceName} is now at ${this.batteryLevel}% battery`);
    } else {
      console.log(`${this.deviceName} has no battery left. Please recharge.`);
      this.powerOff();
    }
  }

  recharge() {
    this.batteryLevel = 100;
    console.log(`${this.deviceName} is fully recharged.`);
  }

  enablePowerSavingMode() {
    this.powerSavingMode = true;
    console.log(`${this.deviceName} is now in power saving mode.`);
  }

  disablePowerSavingMode() {
    this.powerSavingMode = false;
    console.log(`${this.deviceName} has exited power saving mode.`);
  }

  displayDetails() {
    console.log(`Device: ${this.deviceName}`);
    console.log(`Type: ${this.deviceType}`);
    console.log(`Location: ${this.location}`);
    console.log(`Status: ${this.status}`);
    console.log(`Battery Level: ${this.batteryLevel}%`);
    console.log(
      `Power Saving Mode: ${this.powerSavingMode ? "Enabled" : "Disabled"}`
    );
  }
}

const smartThermostat = new SmartHomeDevice(
  "Smart Thermostat",
  "Climate Control",
  "Living Room"
);

smartThermostat.displayDetails();
smartThermostat.useBattery();
smartThermostat.powerOn();
smartThermostat.useBattery();
