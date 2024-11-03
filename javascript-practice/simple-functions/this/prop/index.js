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

const server1 = new Server("Server1", "192.168.0.1");

server1.setProps({ location: "Data Center A", port: 8080 });

console.log(server1);
