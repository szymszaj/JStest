const fs = require("fs");
const path = require("path");
const readline = require("readline");

function createLogEntry(entry) {
  const date = new Date().toISOString().split("T")[0];
  const logMessage = `Log entry for: ${date}\n- Entry: ${entry}\n\n`;

  const logsDir = path.join(__dirname, "logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  let reportNumber = 1;
  let currentReportFile = path.join(logsDir, `report-${reportNumber}.txt`);

  while (fs.existsSync(currentReportFile)) {
    const reportContent = fs.readFileSync(currentReportFile, "utf-8");
    const entryCount = reportContent.split("\n\n").length - 1;

    if (entryCount < 7) {
      break;
    } else {
      reportNumber++;
      currentReportFile = path.join(logsDir, `report-${reportNumber}.txt`);
    }
  }

  fs.appendFileSync(currentReportFile, logMessage);
  console.log(
    `Log entry for ${date} has been saved in ${path.basename(
      currentReportFile
    )}!`
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter what you worked on today: ", (answer) => {
  createLogEntry(answer);
  rl.close();
});
