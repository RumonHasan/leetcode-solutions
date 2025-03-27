const expressiveWords = (s, words) => {
  let count = 0;
  let sGroup = [[s[0], 1]];

  for (let i = 1; i < s.length; i++) {
    if (sGroup[sGroup.length - 1][0] === s[i]) {
      sGroup[sGroup.length - 1][1]++;
    } else {
      sGroup.push([s[i], 1]);
    }
  }

  const checkWord = (checkWord) => {
    const checkGroup = [[checkWord[0], 1]];
    for (let i = 1; i < checkWord.length; i++) {
      if (checkGroup[checkGroup.length - 1][0] === checkWord[i]) {
        checkGroup[checkGroup.length - 1][1]++;
      } else {
        checkGroup.push([checkWord[i], 1]);
      }
    }
    if (checkGroup.length !== sGroup.length) return false;
    for (let i = 0; i < checkGroup.length; i++) {
      const [checkGroupLetter, checkGroupSize] = checkGroup[i];
      const [sGroupLetter, sGroupSize] = sGroup[i];

      if (checkGroupLetter !== sGroupLetter) {
        // if letters are not equal then return false since it cannot be stretched
        return false;
      }
      if (checkGroupLetter == sGroupLetter) {
        if (sGroupSize < checkGroupSize) {
          return false;
        }
        if (sGroupSize > checkGroupSize && sGroupSize < 3) {
          return false;
        }
      }
    }
    return true;
  };

  for (const word of words) {
    if (checkWord(word)) {
      count++;
    }
  }

  return count;
};

console.log(expressiveWords('heeellooo', ['hello', 'hi', 'helo']));
