const longestWord = (words) => {
  let sortedWords = words.sort();
  const checkWord = (word) => {
    let wordSet = new Set();
    let string = '';
    for (let index in word) {
      string += word[index];
      wordSet.add(string);
    }
    let setArray = new Array(...wordSet);
    for (let word of setArray) {
      if (!sortedWords.includes(word)) {
        return false;
      }
    }
    return true;
  };
  let resultArray = [];
  let maxLen = 0;
  for (let index = 0; index < sortedWords.length; index++) {
    let word = sortedWords[index];
    if (checkWord(word)) {
      maxLen = Math.max(word.length, maxLen);
      resultArray.push(word);
    }
  }
  let finalArray = [];
  for (let index in resultArray) {
    resultArray[index].length === maxLen && finalArray.push(resultArray[index]);
  }
  return finalArray[0] === undefined ? '' : '';
};

// console.log(
//   longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])
// );
