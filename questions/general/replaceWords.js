var replaceWords = function (dictionary, sentence) {
  const array = sentence.split(' ');
  let result = [...array]; // Create a copy of the array
  for (let wordIndex in array) {
    let dMatch = '';
    for (let dWord of dictionary) {
      if (array[wordIndex].startsWith(dWord)) {
        if (dMatch === '' || dWord.length < dMatch.length) {
          dMatch = dWord;
        }
      }
    }
    if (dMatch !== '') {
      result[wordIndex] = dMatch;
    }
  }
  return result.join(' ');
};

// console.log(
//   replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')
// );
