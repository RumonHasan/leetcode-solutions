const findLongestWord = (s, dictionary) => {
  let hash = {};
  for (let char of s) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }
  let words = [];
  for (let index = 0; index < dictionary.length; index++) {
    let word = dictionary[index];
    let hashCopy = { ...hash };
    let resultWord = '';
    for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
      if (hashCopy[word[wordIndex]] === 0) delete hashCopy[word[wordIndex]];
      if (hashCopy[word[wordIndex]]) {
        resultWord += word[wordIndex];
        hashCopy[word[wordIndex]]--;
      }
    }
    resultWord.length === word.length && words.push(resultWord);
  }
  words.filter(
    (word) => word.length === Math.max(...words.map((word) => word.length))
  ); // filter out non-longest words
  words.sort((a, b) => a.localeCompare(b)); // sort in smallest lexicological order
  return words[0];
};

// console.log(
//   findLongestWord('awefawfwaf', [
//     'apple',
//     'ewaf',
//     'awefawfwaf',
//     'awef',
//     'awefe',
//     'ewafeffewafewf',
//   ])
// );
