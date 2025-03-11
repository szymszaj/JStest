import SubstrVowelKConsonant from "./SubstrVowelKConsonant.js";

SubstrVowelKConsonant.prototype.longestSubstringWithAllVowels = function (
  word
) {
  let maxLength = 0;
  let currentLength = 0;
  let vowelSet = new Set();

  for (const char of word) {
    if (SubstrVowelKConsonant.vowel.includes(char)) {
      vowelSet.add(char);
      currentLength++;
    } else {
      vowelSet.clear();
      currentLength = 0;
    }

    if (vowelSet.size === 5) {
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};
