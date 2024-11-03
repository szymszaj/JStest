class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
    this.status = "offline"; // offline, online
  }

  start() {
    this.status = "online";
    console.log(`Server ${this.name} is now online.`);
  }

  stop() {
    this.status = "offline";
    console.log(`Server ${this.name} is now offline.`);
  }

  displayInfo() {
    console.log(`Server: ${this.name}, IP: ${this.ip}, Status: ${this.status}`);
  }

  setProps(props) {
    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }
}
