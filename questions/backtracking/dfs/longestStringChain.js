const longestStringChain = (pairs) => {
  pairs.sort((a, b) => a[1] - b[1]);
  let cache = new Map();

  const dfs = (currIndex) => {
    if (currIndex >= pairs.length) {
      // base case if its more than length then return 0
      return 0;
    }

    if (cache.has(currIndex)) {
      return cache.get(currIndex); // returns the current max index
    }

    // include the first and traverse for the next indices to check
    let includeFirst = 1;
    let nextIndex = currIndex + 1;

    // skip all the pairs that overlap with current pairs index
    while (
      nextIndex < pairs.length &&
      pairs[nextIndex][0] <= pairs[currIndex][1]
    ) {
      // check for the condition for hte next index
      nextIndex++;
    }
    // include the first and get the next index
    if (nextIndex < pairs.length) {
      includeFirst += dfs(nextIndex);
    }

    // skip the first one
    let skipFirst = dfs(currIndex + 1);
    let result = Math.max(skipFirst, includeFirst);

    cache.set(currIndex, result);

    return result;
  };

  return dfs(0);
};

console.log(
  longestStringChain([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
