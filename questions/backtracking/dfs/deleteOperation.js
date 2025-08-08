const deleteOperation = (word1, word2) => {
  const cache = new Map();

  const dfs = (indexOne, indexTwo) => {
    const cacheKey = `${indexOne}-${indexTwo}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    if (indexOne === word1.length && indexTwo === word2.length) {
      return 0;
    }

    // base cases for returning the remaining operation (chars)
    if (indexOne >= word1.length) {
      return word2.length - indexTwo;
    }
    if (indexTwo >= word2.length) {
      return word1.length - indexOne;
    }

    let minCombinations = Infinity;

    if (word1[indexOne] === word2[indexTwo]) {
      minCombinations = dfs(indexOne + 1, indexTwo + 1);
    } else {
      minCombinations =
        1 + Math.min(dfs(indexOne + 1, indexTwo), dfs(indexOne, indexTwo + 1));
    }
    cache.set(cacheKey, minCombinations);
    return minCombinations;
  };

  return dfs(0, 0);
};

// using dfs approach to solve this by deleting one character at a time and finding minimum characters
console.log(deleteOperation('leetcode', 'etco'));
