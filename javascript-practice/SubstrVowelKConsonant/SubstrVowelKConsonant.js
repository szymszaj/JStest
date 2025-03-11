class SubstrVowelKConsonant {
  static vowel = "aeiou";

  countOfSubstrings(word, k) {
    let n = word.length;
    return this.atleastK(word, k, n) - this.atleastK(word, k + 1, n);
  }

  atleastK(word, minKReq, n) {
    let vowelFreq = new Map();
    let lt = 0,
      rt = -1,
      nonVowel = 0;
    let result = 0;

    while (++rt < n) {
      if (SubstrVowelKConsonant.vowel.includes(word[rt])) {
        if (vowelFreq.has(word[rt])) {
          vowelFreq.set(word[rt], vowelFreq.get(word[rt]) + 1);
        } else {
          vowelFreq.set(word[rt], 1);
        }
      } else {
        nonVowel++;
      }

      while (nonVowel >= minKReq && vowelFreq.size === 5) {
        result += n - rt;
        if (SubstrVowelKConsonant.vowel.includes(word[lt])) {
          if (vowelFreq.get(word[lt]) - 1 === 0) {
            vowelFreq.delete(word[lt]);
          } else {
            vowelFreq.set(word[lt], vowelFreq.get(word[lt]) - 1);
          }
        } else {
          nonVowel--;
        }

        lt++;
      }
    }

    return result;
  }

  countVowelsAndConsonants(word) {
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
  }

  longestSubstringWithAllVowels(word) {
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
  }
}

const instance = new SubstrVowelKConsonant();
console.log(instance.countOfSubstrings("yourwordhere", 2));
console.log(instance.countVowelsAndConsonants("yourwordhere"));
console.log(instance.longestSubstringWithAllVowels("yourwordhere"));
