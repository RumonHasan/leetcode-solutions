const editDistance = (word1, word2) => {
  const cache = new Map();

  const dfs = (indexOne, indexTwo) => {
    const cacheKey = `${indexOne}-${indexTwo}`;

    // base case where if one of reaches the end then return the other value by length - the original length
    if (indexOne >= word1.length) {
      return word2.length - indexTwo;
    }

    if (indexTwo >= word2.length) {
      return word1.length - indexOne;
    }
    // return from cache
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // if the chars are equal then skip the current count
    if (word1[indexOne] === word2[indexTwo]) {
      return dfs(indexOne + 1, indexTwo + 1);
    }
    // only count the operation if the chars are not equal
    let result = 0;
    if (word1[indexOne] !== word2[indexTwo]) {
      result =
        1 +
        Math.min(
          dfs(indexOne + 1, indexTwo + 1),
          dfs(indexOne + 1, indexTwo),
          dfs(indexOne, indexTwo + 1)
        );
    }
    cache.set(cacheKey, result);
    return result;
  };

  return dfs(0, 0);
};

/**
 * Using dfs memoization to insert remove and replace... only skip if the characters are already equal
 */
//console.log(editDistance('intention', 'execution'));

const lcs = (text1, text2) => {
  const cache = new Map();

  const dfs = (indexOne, indexTwo) => {
    const cacheKey = indexOne * 1000 + indexTwo;
    if (indexOne >= text1.length || indexTwo >= text2.length) {
      return 0;
    }

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    let result = 0;
    if (text1[indexOne] === text2[indexTwo]) {
      result = 1 + dfs(indexOne + 1, indexTwo + 1);
    } else {
      result = Math.max(
        dfs(indexOne + 1, indexTwo),
        dfs(indexOne, indexTwo + 1)
      );
    }

    cache.set(cacheKey, result);
    return result;
  };

  return dfs(0, 0);
};

console.log(lcs('abcde', 'ace'));
