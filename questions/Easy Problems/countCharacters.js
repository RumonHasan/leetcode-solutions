const countCharacters = (words, chars) => {
  let charMap = new Map();
  let finalLengthCounter = 0;
  for (let index in chars) {
    if (charMap.has(chars[index])) {
      charMap.set(chars[index], charMap.get(chars[index]) + 1);
    } else {
      charMap.set(chars[index], 1);
    }
  }
  // checking word from map and deleting keys accordingly
  const checkWord = (map, word) => {
    let counter = 0;
    for (let index in word) {
      if (map.get(word[index]) === 0) {
        map.delete(word[index]);
      }
      if (map.has(word[index])) {
        map.set(word[index], map.get(word[index]) - 1);
        counter++;
      }
    }
    return counter === word.length;
  };
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let charMapCopy = new Map(charMap);
    if (checkWord(charMapCopy, word)) {
      finalLengthCounter += word.length;
    }
  }
  return finalLengthCounter;
};

// console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
