const longestBeautifulString = (word) => {
  let finalLen = 0;
  let vowels = 'aeiou'; // vowel order
  let end = 0;

  while (end < word.length) {
    if (word[end] === 'a') {
      let check = true; // Reset to true at the start
      let lenCheck = 0;
      let checkIndex = 0;

      for (let i = 0; i < vowels.length; i++) {
        const currVowel = vowels[i];
        if (end >= word.length || word[end] !== currVowel) {
          check = false;
          break;
        }
        // for repetions of the same vowel letter and increasing the index
        while (end < word.length && word[end] === currVowel) {
          end++;
          lenCheck++;
        }
        checkIndex = i; // make sure check index goes till the end
      }
      if (check && checkIndex === 4 && lenCheck >= 5) {
        finalLen = Math.max(finalLen, lenCheck);
      }
    } else {
      end++;
    }
  }

  return finalLen;
};

//console.log(longestBeautifulString('aeiaaioaaaaeiiiiouuuooaauuaeiu')); // Should output 13

const numberOfSubstrings = (s) => {
  let map = new Map();
  let end = 0;
  let start = 0;
  let total = 0;

  while (end < s.length) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);
    while (map.size === 3) {
      total += s.length - end;
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) - 1);
        if (map.get(s[start]) === 0) {
          map.delete(s[start]);
        }
      }
      start++;
    }
    end++;
  }

  return total;
};

console.log(numberOfSubstrings('abcabc'));
