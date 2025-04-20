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

  isPlaindrome: function (word) {
    const reversed = this.reverseWords(word);
    return word.toLowerCase() === reversed.toLowerCase();
  },
};
