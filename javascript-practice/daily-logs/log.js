const fs = require("fs");
const path = require("path");
const readline = require("readline");

function createDailyLog(entry) {
  const date = new Date().toISOString().split("T")[0];
  const logMessage = `Log z dnia: ${date}\n- Wpis: ${entry}\n`;

  const filePath = path.join(__dirname, "logs", `${date}.txt`);

  if (!fs.existsSync(path.join(__dirname, "logs"))) {
    fs.mkdirSync(path.join(__dirname, "logs"));
  }

  fs.writeFileSync(filePath, logMessage);
  console.log(`Log na dzień ${date} został zapisany!`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Wpisz, co dzisiaj robiłeś: ", (answer) => {
  createDailyLog(answer);
  rl.close();
});
