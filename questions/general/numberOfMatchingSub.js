const numberOfMatchingSubsequence = (s, words) => {
  let map = new Map();
  let counter = 0;

  const isSubCheck = (word, string, map) => {
    let index = -1;
    if (map.has(word) && map.get(word)) {
      return map.get(word); // returns true if its a repeated word
    }
    for (let i = 0; i < word.length; i++) {
      const currChar = word[i];
      index = string.indexOf(currChar, index + 1); // searching from the prev position plus one
      // cannot use i here because i checks for the word not the string but the goal is to check from the string
      if (index === -1) {
        map.set(word, false);
        return false;
      }
    }
    // if the word is found then update the map
    map.set(word, true);
    return true;
  };
  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];
    if (isSubCheck(currWord, s, map)) {
      counter++;
    }
  }
  return counter;
};

console.log(
  numberOfMatchingSubsequence('btovxbkumc', [
    'btovxbku',
    'to',
    'zueoxxxjme',
    'yjkclbkbtl',
  ])
);
