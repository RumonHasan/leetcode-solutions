const isAlienSorted = (words, order) => {
  for (let index = 1; index < words.length; index++) {
    let secondWord = words[index];
    let firstWord = words[index - 1];
    let minLength = Math.min(firstWord.length, secondWord.length);
    for (let secondIndex = 0; secondIndex < minLength; secondIndex++) {
      let firstWordCharIndex = order.indexOf(firstWord[secondIndex]);
      let secondWordCharIndex = order.indexOf(secondWord[secondIndex]);
      if (firstWordCharIndex > secondWordCharIndex) {
        return false;
      }
      if (secondWordCharIndex > firstWordCharIndex) {
        break;
      }
    }
    if (firstWord.length > secondWord.length) {
      return false;
    }
  }
  return true;
};

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'));
