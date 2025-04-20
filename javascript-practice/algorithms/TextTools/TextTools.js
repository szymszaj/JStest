const TextTools = {
  areAnagrams: function (word1, word2) {
    const format = (word) => word.toLowerCase().split("").sort().join("");
    return format(word1) === format(word2);
  },

  charFrequency: function (word) {
    const freaquency = {};
    for (const char of word.toLowerCase()) {
      freaquency[char] = (freaquency[char] || 0) + 1;
    }
    return freaquency;
  },

  reverseWords: function (word) {
    return word.split(" ").reverse().join(" ");
  },

  isPalindrome: function (word) {
    const reversed = this.reverseWords(word);
    return word.toLowerCase() === reversed.toLowerCase();
  },
};

const word1 = "listen";
const word2 = "silent";
console.log(
  `Czy "${word1}" i "${word2}" są anagramami?`,
  TextTools.areAnagrams(word1, word2)
);

const word = "banana";
console.log(
  `Częstotliwość znaków w słowie "${word}":`,
  TextTools.charFrequency(word)
);

const palindrome = "kajak";
console.log(
  `Czy słowo "${palindrome}" jest palindromem?`,
  TextTools.isPalindrome(palindrome)
);

const nonPalindrome = "hello";
console.log(
  `Czy słowo "${nonPalindrome}" jest palindromem?`,
  TextTools.isPalindrome(nonPalindrome)
);
