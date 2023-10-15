const findReplacePattern = (words, pattern) => {
  const intuitiveApproach = () => {
    let collection = [];
    const occurenceMap = (string) => {
      let map = new Map();
      for (let index = 0; index < string.length; index++) {
        const char = string[index];
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
      }
      return map;
    };
    let patternMap = occurenceMap(pattern);
    // using double maps to map the letters to each other to replicate pattern similarity
    const patternCheck = (word, pattern) => {
      let map = new Map();
      for (let index = 0; index < word.length; index++) {
        const wordChar = word[index];
        const patternChar = pattern[index];
        if (!map.has(wordChar)) {
          map.set(wordChar, patternChar);
        }
        if (map.has(wordChar) && map.get(wordChar) !== patternChar) {
          return false;
        } else {
          continue;
        }
      }
      return true;
    };
    let end = 0;
    while (end < words.length) {
      let word = words[end];
      let wordMap = occurenceMap(word);
      if (wordMap.size === patternMap.size) {
        if (patternCheck(word, pattern)) {
          collection.push(word);
        }
      }
      end++;
    }
    return collection;
  };
};

// // getting the similar pattern and collecting the words
// console.log(
//   findReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
// );
