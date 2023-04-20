const maxProduct = (words) => {
  words.sort((a, b) => b.length - a.length);
  const checkCommonChars = (word, checkWord) => {
    for (let index = 0; index < word.length; index++) {
      if (checkWord.includes(word.charAt(index))) {
        return false;
      }
    }
    return true;
  };
  let maxLength = 0;
  for (let index = 0; index < words.length; index++) {
    let mainWord = words[index];
    for (
      let secondIndex = index + 1;
      secondIndex < words.length;
      secondIndex++
    ) {
      if (words[secondIndex].length * mainWord.length > maxLength) {
        if (checkCommonChars(mainWord, words[secondIndex])) {
          maxLength = mainWord.length * words[secondIndex].length;
        }
      }
    }
  }
  return maxLength;
};

//console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']));
