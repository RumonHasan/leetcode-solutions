const numMatchingSubsequence = (s, words) => {
  // basic brute force approach
  const basicIntuitiveApproach = () => {
    let matchCounter = 0;
    let end = 0;
    while (end < words.length) {
      const word = words[end];
      let localWordIndex = 0;
      for (let index = 0; index < s.length; index++) {
        let sChar = s[index];
        if (sChar === word[localWordIndex]) {
          localWordIndex++;
        }
      }
      if (localWordIndex === word.length) {
        matchCounter++;
      }
      end++;
    }
    return matchCounter;
  };

  // optimized approach by preventing duplicate values so using the js indexOf function
  const optimizedApproach = () => {
    let counter = 0;
    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      let wordIndexCounter = 0;
      let indexStartCounter = 0;
      // iterating through the word and checking through the indices
      for (let subIndex = 0; subIndex < word.length; subIndex++) {
        const letter = word[subIndex];
        const checkIndex = s.indexOf(letter, indexStartCounter);
        if (checkIndex === -1) {
          break;
        }
        if (checkIndex > -1) {
          wordIndexCounter++;
          // updating the starting search parameter by upping the index location
          indexStartCounter = checkIndex + 1;
        }
      }
      if (wordIndexCounter === word.length) {
        counter++;
      }
    }
    return counter;
  };
  console.log(optimizedApproach());
};

console.log(numMatchingSubsequence('abcde', ['a', 'b', 'acd', 'ace']));
