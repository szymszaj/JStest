const readline = require("readline");
const lib = require("./kcal_lib");
const { ACTIVITY_MULTIPLIERS, GOAL_ADJUST, toNumberOrNull, computeResults } =
  lib;

function printHelp() {
  console.log("Kalkulator kcal — użycie:");
  console.log(
    "node kcal_calculator.js --sex <m|f> --age <lat> --weight <kg> --height <cm> --activity <sedentary|light|moderate|active|very_active> --goal <lose|maintain|gain>"
  );
  console.log("Lub uruchom bez argumentów, aby wejść w tryb interaktywny.");
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
      "Poziomy aktywności: sedentary, light, moderate, active, very_active"
    );
    let activity = await q("Aktywność: ");
    while (!ACTIVITY_MULTIPLIERS[activity]) {
      activity = await q(
        "Wybierz: sedentary|light|moderate|active|very_active: "
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

  console.log("\nWyniki:");
  console.log(`BMR (podstawowa przemiana materii): ${round(bmr)} kcal/dzień`);
  console.log(
    `TDEE (przy uwzględnieniu aktywności): ${round(
      tdee
    )} kcal/dzień (multiplier: ${multiplier})`
  );
  if (goal === "lose")
    console.log(
      `Aby tracić ~0.5 kg/tydzień: ~${round(adjusted)} kcal/dzień (≈ -500 kcal)`
    );
  else if (goal === "gain")
    console.log(
      `Aby przybierać ~0.5 kg/tydzień: ~${round(
        adjusted
      )} kcal/dzień (≈ +500 kcal)`
    );
  else console.log(`Aby utrzymać wagę: ~${round(adjusted)} kcal/dzień`);
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
    console.error("Nieprawidłowe (lub brakujące) argumenty.");
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
