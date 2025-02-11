const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const responses = {
  cześć: "Cześć! Jak mogę Ci pomóc?",
  "jak masz na imię": "Jestem prostym chatbotem.",
  "kiedy była 2 wojna światowa":
    "II wojna światowa trwała od 1939 do 1945 roku.",
  "jaka jest dziś pogoda": "Nie wiem, ale możesz sprawdzić w Google. 😃",
  "do widzenia": "Do zobaczenia!",
};

function askQuestion() {
  rl.question("Ty: ", (question) => {
    const answer =
      responses[question.toLowerCase()] || "Nie znam odpowiedzi na to pytanie.";
    console.log("Bot:", answer);

    if (question.toLowerCase() === "do widzenia") {
      rl.close();
    } else {
      askQuestion();
    }
  });
}

console.log("Witaj! Możesz zadawać pytania.");
askQuestion();
