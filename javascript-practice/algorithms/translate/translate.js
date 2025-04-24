import fetch from "node-fetch";
import readlineSync from "readline-sync";
import dotenv from "dotenv";

dotenv.config();

const colors = {
  blue: "\x1b[34m",
  green: "\x1b[32m",
  reset: "\x1b[0m",
};

async function translateText(text, sourceLang = "pl", targetLang = "en") {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=${sourceLang}|${targetLang}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    } else {
      throw new Error(`Błąd tłumaczenia: ${data.responseStatus}`);
    }
  } catch (error) {
    console.error("Błąd podczas tłumaczenia:", error.message);
    return null;
  }
}

async function main() {
  console.clear();
  console.log(colors.blue + "╔════════════════════════════════════════════╗");
  console.log("║           TŁUMACZ POLSKI NODE.JS              ║");
  console.log("╚════════════════════════════════════════════╝" + colors.reset);

  console.log("\nWpisz tekst po polsku poniżej (PL):");
  const inputText = readlineSync.question("PL: ");

  if (!inputText) {
    console.log("Nie podano tekstu. Wychodzenie...");
    return;
  }

  console.log("\nTłumaczenie...");
  const translatedText = await translateText(inputText);

  if (translatedText) {
    console.log("\n" + colors.green + "EN: " + colors.reset + translatedText);
  } else {
    console.log("Tłumaczenie nie powiodło się. Spróbuj ponownie.");
  }
}

main();
