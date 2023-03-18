const removeAnagrams = (words) => {
  const isValidAnagrams = (word1, word2) => {
    if (word1.length !== word2.length) return false;
    let hash = {};
    for (let char of word1) {
      hash[char] ? hash[char]++ : (hash[char] = 1);
    }
    for (let char of word2) {
      if (!hash[char]) {
        return false;
      } else {
        hash[char]--;
      }
    }
    return true;
  };
  let index = 0;
  while (index < words.length) {
    if (words[index - 1]) {
      if (isValidAnagrams(words[index], words[index - 1])) {
        words.splice(index, 1);
        index = 0;
      }
    }
    index++;
  }
  return words;
};

// console.log(removeAnagrams(['zc', 'cz', 'z', 'gsw']));
