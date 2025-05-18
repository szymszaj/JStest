const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("\n--- Terminal Chat ---");
  console.log("1. Send a message");
  console.log("2. View all messages");
  console.log("3. Exit");
  rl.question("Wybierz opcję: ", async (answer) => {
    if (answer === "1") {
      rl.question("Wpisz wiadomość: ", async (msg) => {
        await axios.post("http://localhost:3000/messages", { message: msg });
        console.log("Message sent!");
        menu();
      });
    } else if (answer === "2") {
      const res = await axios.get("http://localhost:3000/messages");
      console.log("\n--- Messages ---");
      res.data.forEach((m, i) => {
        console.log(`${i + 1}: [${m.date}] ${m.message}`);
      });
      menu();
    } else if (answer === "3") {
      rl.close();
    } else {
      console.log("Unknown option.");
      menu();
    }
  });
}

menu();
