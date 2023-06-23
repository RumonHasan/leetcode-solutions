const mergeStringsAlternatively = (word1, word2) => {
  const messyIntuitiveSolution = () => {
    let result = '';
    let end = 0;
    const filterMaxLength = (string, count) => {
      let localExcessLetters = '';
      let k = 0;
      for (let index = string.length - 1; index >= 0; index--) {
        if (count === k) break;
        localExcessLetters += string[index];
        k++;
      }
      return localExcessLetters.split('').reverse().join('');
    };
    let maxLength = Math.max(word1.length, word2.length);
    while (end < word1.length) {
      if (word1[end] === undefined || word2[end] === undefined) {
        break;
      }
      result += word1[end];
      result += word2[end];
      end++;
    }
    // printing out final result
    if (result.length === word1.length + word2.length) {
      return result;
    } else {
      let excessLetters = '';
      if (word1.length === maxLength) {
        excessLetters = filterMaxLength(
          word1,
          word1.length + word2.length - result.length
        );
      } else {
        excessLetters = filterMaxLength(
          word2,
          word1.length + word2.length - result.length
        );
      }
      return (result += excessLetters);
    }
  };

  //optimized way using two pointer method
  const optimizedWayUsingTwoPointers = () => {
    let pointerOne = 0;
    let pointerTwo = 0;
    let mergedString = '';
    while (pointerOne < word1.length && pointerTwo < word2.length) {
      mergedString += word1[pointerOne];
      mergedString += word2[pointerTwo];
      pointerOne++;
      pointerTwo++;
    }
    if (pointerOne < word1.length) {
      return (mergedString += word1.slice(
        word1.length - (word1.length - pointerOne),
        word1.length
      ));
    } else if (pointerTwo < word2.length) {
      return (mergedString += word2.slice(
        word2.length - (word2.length - pointerTwo),
        word2.length
      ));
    }
    return mergedString;
  };
};

// alternative string merging starting from word1;
//console.log(mergeStringsAlternatively('abcef', 'pqr'));
