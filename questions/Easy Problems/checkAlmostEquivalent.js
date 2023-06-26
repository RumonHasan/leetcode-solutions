const checkAlmostEquivalent = (word1, word2) => {
  const uglyMode = () => {
    let commonMap = new Map();
    let commonMapTwo = new Map();
    let end = 0;
    while (end < word1.length) {
      //two
      if (commonMapTwo.has(word2[end])) {
        commonMapTwo.set(word2[end], commonMapTwo.get(word2[end]) + 1);
      } else {
        commonMapTwo.set(word2[end], 1);
      }
      // one
      if (commonMap.has(word1[end])) {
        commonMap.set(word1[end], commonMap.get(word1[end]) + 1);
      } else {
        commonMap.set(word1[end], 1);
      }
      end++;
    }
    // common iteration check
    for (let [key, value] of commonMap) {
      if (commonMapTwo.has(key)) {
        if (Math.abs(value - commonMapTwo.get(key)) > 3) {
          return false;
        }
      } else {
        if (Math.abs(value - 0) > 3) {
          return false;
        }
      }
    }
    for (let [key, value] of commonMapTwo) {
      if (commonMap.has(key)) {
        if (Math.abs(value - commonMapTwo.get(key)) > 3) {
          return false;
        }
      } else {
        if (Math.abs(value - 0) > 3) {
          return false;
        }
      }
    }

    return true;
  };

  // optimized way
  const optimizedWay = () => {
    let wordHash = {};
    let wordHashTwo = {};
    const checkHash = (hash, checkHash) => {
      for (let [key, value] of Object.entries(hash)) {
        if (checkHash[key]) {
          if (Math.abs(checkHash[key] - value) > 3) {
            return false;
          }
        } else {
          if (value > 3) {
            return false;
          }
        }
      }
      return true;
    };
    for (let index = 0; index < word1.length; index++) {
      wordHash[word1[index]]
        ? wordHash[word1[index]]++
        : (wordHash[word1[index]] = 1);
      wordHashTwo[word2[index]]
        ? wordHashTwo[word2[index]]++
        : (wordHashTwo[word2[index]] = 1);
    }
    let checkOne = checkHash(wordHash, wordHashTwo);
    let checkTwo = checkHash(wordHashTwo, wordHash);
    return checkOne && checkTwo;
  };
};

//console.log(checkAlmostEquivalent('abcdeef', 'abaaacc'));
