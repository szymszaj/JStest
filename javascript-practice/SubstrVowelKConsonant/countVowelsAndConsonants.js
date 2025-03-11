import SubstrVowelKConsonant from "./SubstrVowelKConsonant.js";

SubstrVowelKConsonant.prototype.countVowelsAndConsonants = function (word) {
  let vowels = 0;
  let consonants = 0;

  for (const char of word) {
    if (SubstrVowelKConsonant.vowel.includes(char)) {
      vowels++;
    } else if (char.match(/[a-z]/i)) {
      consonants++;
    }
  }

  return { vowels, consonants };
};
