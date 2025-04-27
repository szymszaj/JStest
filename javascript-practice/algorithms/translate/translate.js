import fetch from "node-fetch";
import readlineSync from "readline-sync";
import dotenv from "dotenv";
import buildTranslationUrl from "./key.js";
import { colors } from "./color.js";

dotenv.config();

async function translateText(text, sourceLang = "pl", targetLang = "en") {
  try {
    const url = buildTranslationUrl(text, sourceLang, targetLang);
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

  console.log("\nWpisz tekst po polsku poniżej (PL):");
  const inputText = readlineSync.question(colors.blue + "PL: " + colors.reset);

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
