class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
    this.status = "offline";
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

const server2 = new Server("Server2", "10.0.0.2");

server2.setProps({
  location: "Data Center B",
  port: 443,
  config: {
    maxConnections: 1000,
    timeout: 300,
    SSL: true,
  },
  maintenanceSchedule: ["2024-01-15", "2024-07-20"],
});

console.log(server2);
