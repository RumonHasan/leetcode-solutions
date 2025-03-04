const wordCount = (startWords, targetWords) => {
  let startSet = new Set();
  // function to sort the letter of the word
  const sortWord = (word) => {
    return word
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
  };

  // adding the sorted version of the word
  for (let i = 0; i < startWords.length; i++) {
    const startSortedWord = sortWord(startWords[i]);
    startSet.add(startSortedWord);
  }
  let counter = 0;

  for (let i = 0; i < targetWords.length; i++) {
    const targetWord = targetWords[i];
    for (let j = 0; j < targetWord.length; j++) {
      const targetSlice =
        targetWord.slice(0, j) + targetWord.slice(j + 1, targetWord.length);
      const sortedSlice = sortWord(targetSlice);
      // if a sorted slice is included in startWord set that means that target is found
      if (startSet.has(sortedSlice)) {
        counter++;
        break;
      }
    }
  }

  return counter;
};

console.log(wordCount(['ant', 'act', 'tack'], ['tack', 'act', 'acti']));
