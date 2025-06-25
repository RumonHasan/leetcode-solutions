const interleavingString = (s1, s2, s3) => {
  const cache = new Map();

  const dfs = (indexOne, indexTwo, indexThree) => {
    const cachekey = `${indexOne}-${indexTwo}`;
    // main base case checking whether all characters are used or not only after checking whether indexThree has reached the end or not
    if (indexThree === s3.length) {
      return indexOne === s1.length && indexTwo === s2.length;
    }
    // memoization
    if (cache.has(cachekey)) {
      return cache.get(cachekey);
    }

    let includeOne = false;
    let includeTwo = false;

    if (s1[indexOne] === s3[indexThree]) {
      includeOne = dfs(indexOne + 1, indexTwo, indexThree + 1);
    }

    if (s2[indexTwo] === s3[indexThree]) {
      includeTwo = dfs(indexOne, indexTwo + 1, indexThree + 1);
    }

    const result = includeOne || includeTwo;
    cache.set(cachekey, result);
    return result;
  };

  return dfs(0, 0, 0);
};

/**
 * Using dfs memoization approach to make combinations and checking whether we can reach the final character index
 * of s3 or not in order to return true.... if a valid path is found then return true
 * main idea is to select different chars from s1 or s2 in turn then running dfs within them and returning whether
 * there can be interleaving combination from the current index or not
 */
console.log(interleavingString('aabcc', 'dbbca', 'aadbbcbcac'));
