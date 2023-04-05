const twoEditWordsCheck = (queries, dictionary) => {
  // general brute force approach... only way to tackle this problem
  const checkWord = (queryWord, dicWord) => {
    let counter = 0;
    for (let index = 0; index < dicWord.length; index++) {
      if (counter > 2) {
        break;
      }
      if (queryWord[index] !== dicWord[index]) {
        dicWord[index] = queryWord[index];
        counter++;
      }
    }
    return counter;
  };
  let result = [];
  for (let queryWord of queries) {
    for (let dicWord of dictionary) {
      if (checkWord(queryWord, dicWord) <= 2) {
        // if the word is in query add and break to avoid repetitions
        if (queries.includes(queryWord)) {
          result.push(queryWord);
          break;
        }
      }
    }
  }
  return result;
};

// console.log(
//   twoEditWordsCheck(
//     ['t', 'i', 'i', 'p', 's'],
//     ['w', 'j', 'b', 'p', 'u', 'b', 'u', 'i', 'h', 'm']
//   )
// );
