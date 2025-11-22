const readline = require("readline");
const lib = require("./kcal_lib");
const { ACTIVITY_MULTIPLIERS, GOAL_ADJUST, toNumberOrNull, computeResults } =
  lib;

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  red: "\x1b[31m",
};

const c = (color, text) => `${colors[color]}${text}${colors.reset}`;

function printHelp() {
  console.log(c("bright", "\nKalkulator kcal — użycie:"));
  console.log(
    c("cyan", "node kcal_calculator.js") +
      " --sex <m|f> --age <lat> --weight <kg> --height <cm> --activity <sedentary|light|moderate|active|very_active> --goal <lose|maintain|gain>"
  );
  console.log(
    c("yellow", "Lub uruchom bez argumentów, aby wejść w tryb interaktywny.")
  );
}

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") {
      args.help = true;
      break;
    }
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const val = argv[i + 1];
      if (!val || val.startsWith("--")) {
        args[key] = true;
      } else {
        args[key] = val;
        i++;
      }
    }
  }
  return args;
}

function round(n) {
  return Math.round(n);
}

async function interactivePrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const q = (prompt) =>
    new Promise((resolve) => rl.question(prompt, (ans) => resolve(ans.trim())));

  try {
    let sex = await q("Płeć (m/f): ");
    while (!/^[mf]$/i.test(sex)) {
      sex = await q('Wpisz "m" lub "f": ');
    }

    let age = toNumberOrNull(await q("Wiek (lata): "));
    while (age === null || age <= 0) {
      age = toNumberOrNull(await q("Wiek (liczba): "));
    }

    let weight = toNumberOrNull(await q("Waga (kg): "));
    while (weight === null || weight <= 0) {
      weight = toNumberOrNull(await q("Waga (kg): "));
    }

    let height = toNumberOrNull(await q("Wzrost (cm): "));
    while (height === null || height <= 0) {
      height = toNumberOrNull(await q("Wzrost (cm): "));
    }

    console.log(
      c("cyan", "Poziomy aktywności: ") +
        "sedentary, light, moderate, active, very_active"
    );
    let activity = await q(c("yellow", "Aktywność: "));
    while (!ACTIVITY_MULTIPLIERS[activity]) {
      activity = await q(
        c("red", "Wybierz: ") + "sedentary|light|moderate|active|very_active: "
      );
    }

    let goal = await q("Cel (lose/maintain/gain): ");
    while (!GOAL_ADJUST.hasOwnProperty(goal)) {
      goal = await q("Wybierz cel: lose|maintain|gain: ");
    }

    rl.close();

    return { sex: sex.toLowerCase(), age, weight, height, activity, goal };
  } catch (err) {
    rl.close();
    throw err;
  }
}

function computeAndPrint(inputs) {
  const { sex, age, weight, height, activity, goal } = inputs;
  const { bmr, multiplier, tdee, adjusted } = computeResults({
    sex,
    age,
    weight,
    height,
    activity,
    goal,
  });

  console.log(c("bright", "\nWyniki:"));
  console.log(
    c("cyan", "BMR") +
      ` (podstawowa przemiana materii): ` +
      c("green", `${round(bmr)} kcal/dzień`)
  );
  console.log(
    c("cyan", "TDEE") +
      ` (przy uwzględnieniu aktywności): ` +
      c("green", `${round(tdee)} kcal/dzień`) +
      c("blue", ` (multiplier: ${multiplier})`)
  );

  if (goal === "lose")
    console.log(
      c("yellow", "Aby tracić ~0.5 kg/tydzień: ") +
        c("magenta", `~${round(adjusted)} kcal/dzień`) +
        c("red", " (≈ -500 kcal)")
    );
  else if (goal === "gain")
    console.log(
      c("yellow", "Aby przybierać ~0.5 kg/tydzień: ") +
        c("magenta", `~${round(adjusted)} kcal/dzień`) +
        c("green", " (≈ +500 kcal)")
    );
  else
    console.log(
      c("yellow", "Aby utrzymać wagę: ") +
        c("magenta", `~${round(adjusted)} kcal/dzień`)
    );
}

(async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printHelp();
    return;
  }

  if (Object.keys(args).length === 0) {
    try {
      const inputs = await interactivePrompt();
      computeAndPrint(inputs);
    } catch (err) {
      console.error("Błąd interakcji:", err.message || err);
    }
    return;
  }

  const sex = args.sex || args.s;
  const age = toNumberOrNull(args.age || args.a);
  const weight = toNumberOrNull(args.weight || args.w);
  const height = toNumberOrNull(args.height || args.h);
  const activity = args.activity || args.act;
  const goal = args.goal || "maintain";

  if (
    !sex ||
    !/^[mf]$/i.test(sex) ||
    age === null ||
    weight === null ||
    height === null ||
    !ACTIVITY_MULTIPLIERS[activity]
  ) {
    console.error(c("red", "Nieprawidłowe (lub brakujące) argumenty."));
    printHelp();
    return;
  }

  computeAndPrint({
    sex: sex.toLowerCase(),
    age,
    weight,
    height,
    activity,
    goal,
  });
})();
