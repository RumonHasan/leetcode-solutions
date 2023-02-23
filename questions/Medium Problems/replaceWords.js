const replaceWords = (dictionary, sentence) => {
  // sorting to add the root based on the length size
  dictionary.sort((a, b) => a.length - b.length);
  let sentenceArray = sentence.split(' ');
  let result = '';
  for (let index in sentenceArray) {
    let sentenceWord = sentenceArray[index];
    for (let i = 0; i < dictionary.length; i++) {
      // if there is a match
      if (sentenceWord.startsWith(dictionary[i])) {
        result += dictionary[i] + ' ';
        break;
      }
      // if there is no match and the index is last
      if (
        !sentenceWord.startsWith(dictionary[i]) &&
        i === dictionary.length - 1
      ) {
        result += sentenceWord + ' ';
        break;
      }
    }
  }
  return result.slice(0, -1);
};

// console.log(
//   replaceWords(
//     ['cat', 'ca', 'bat', 'rat'],
//     'the cattle was rattled by the battery'
//   )
// );
