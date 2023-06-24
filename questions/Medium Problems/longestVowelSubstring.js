const longestVowelSubstring = (word) => {
  let vowelSentence = 'aeiou';
  let maxCount = 0;
  // outer loop to keep track of the entire index
  let index = 0;
  while (index < word.length) {
    // start from a
    if (word[index] === 'a') {
      let trackerIndex = index;
      let checkerIndex = 0;
      // sub iteration for the vowel check
      for (
        let localIndex = 0;
        localIndex < vowelSentence.length;
        localIndex++
      ) {
        if (vowelSentence[localIndex] !== word[index]) {
          checkerIndex = localIndex;
          break;
        }
        // for consequtive letters
        while (
          index < word.length &&
          word[index] === vowelSentence[localIndex]
        ) {
          index++;
        }
      }
      // checking only when all the subindex has been calculated
      if (checkerIndex === 0) {
        maxCount = Math.max(maxCount, index - trackerIndex);
      }
      index = index - 1;
    }
    index++;
  }
  return maxCount;
};

// for this test case the answer is 13
//console.log(longestVowelSubstring('aeiaaioaaaaeiiiiouuuooaauuaeiu'));
