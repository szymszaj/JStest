const axios = require("axios");
const readline = require("readline");
const chalk = require("chalk");
const emoji = require("node-emoji");
const gradient = require("gradient-string");
const dayjs = require("dayjs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const API = "http://localhost:3000";
let username = "";
let liveMode = false;
let liveInterval = null;

function showMessages(messages) {
  console.clear();
  console.log(gradient.cristal("\n--- Terminal Live Chat ---\n"));
  messages.forEach((m) => {
    const time = chalk.gray(dayjs(m.date).format("HH:mm:ss"));
    const user = chalk.cyan(m.user);
    const msg = emoji.emojify(m.message);
    console.log(`${time} ${user}: ${msg}`);
  });
}

async function fetchMessages() {
  try {
    const res = await axios.get(`${API}/messages`);
    showMessages(res.data);
  } catch (err) {
    console.log(chalk.red("Błąd połączenia z serwerem!"));
  }
}

function menu() {
  console.log(chalk.yellow("\n--- Menu ---"));
  console.log("1. Wyślij wiadomość");
  console.log("2. Zobacz wszystkie wiadomości");
  console.log("3. Włącz tryb Live Chat");
  console.log("4. Wyłącz tryb Live Chat");
  console.log("5. Wyjście");

  rl.question("Wybierz opcję: ", async (answer) => {
    if (answer === "1") {
      rl.question("Wpisz wiadomość: ", async (msg) => {
        await axios.post(`${API}/messages`, { message: msg, user: username });
        console.log(chalk.green("✅ Wiadomość wysłana!"));
        menu();
      });
    } else if (answer === "2") {
      await fetchMessages();
      menu();
    } else if (answer === "3") {
      if (!liveMode) {
        liveMode = true;
        liveInterval = setInterval(fetchMessages, 2000);
        console.log(chalk.green("▶ Tryb Live Chat włączony."));
      }
      menu();
    } else if (answer === "4") {
      liveMode = false;
      clearInterval(liveInterval);
      console.log(chalk.red("⏹ Tryb Live Chat wyłączony."));
      menu();
    } else if (answer === "5") {
      rl.close();
      process.exit(0);
    } else {
      console.log(chalk.red("Nieznana opcja."));
      menu();
    }
  });
}

rl.question(chalk.magenta("Podaj swój nick: "), (nick) => {
  username = nick;
  console.log(gradient.summer(`Witaj ${username}!`));
  menu();
});
