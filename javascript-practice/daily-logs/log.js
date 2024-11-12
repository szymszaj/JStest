const fs = require("fs");
const path = require("path");

function createDailyLog() {
  const date = new Date().toISOString().split("T")[0];
  const logMessage = `Log z dnia: ${date}\n- Przykładowy wpis: Dzisiaj pracowałem nad...`;

  const filePath = path.join(__dirname, "logs", `${date}.txt`);

  if (!fs.existsSync(path.join(__dirname, "logs"))) {
    fs.mkdirSync(path.join(__dirname, "logs"));

    fs.writeFileSync(filePath, logMessage);
    console.log(`Log na dzień ${date} został zapisany!`);
  }
}
createDailyLog();
