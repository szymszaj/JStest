const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function calculator() {
  console.log("Prosty kalkulator w Node.js");

  const num1 = parseFloat(await askQuestion("Podaj pierwszą liczbę: "));
  const operator = await askQuestion("Podaj operator (+, -, *, /): ");
  const num2 = parseFloat(await askQuestion("Podaj drugą liczbę: "));

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Nieprawidłowy operator");
      rl.close();
      return;
  }

  console.log(`Wynik: ${num1} ${operator} ${num2} = ${result}`);
  rl.close();
}

calculator();
