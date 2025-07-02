const minStepTwoKeys = (n) => {
  const cache = new Map();
  const TARGET = n;

  const dfs = (currCount, clipboardCount) => {
    const cacheKey = `${currCount}-${clipboardCount}`;
    // if target is reached then no more path remaining to be discovered
    if (currCount === TARGET) {
      return 0;
    }
    if (currCount > TARGET) {
      return Infinity;
    }
    if (clipboardCount > TARGET) {
      return Infinity;
    }
    // if a valid cache path is found then return the existing minimum path from that
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    // you can only add when clipboardCount is 0 or currCount should always be bigger than clipboardCount
    let optionOne = Infinity;
    if (clipboardCount === 0 || currCount > clipboardCount) {
      optionOne = 1 + dfs(currCount, currCount);
    }

    // second option will depend on the added clipboard count
    let optionTwo = Infinity;
    if (clipboardCount > 0 && clipboardCount + currCount <= TARGET) {
      optionTwo = 1 + dfs(currCount + clipboardCount, clipboardCount); // clipboard remains the same
    }
    const result = Math.min(optionOne, optionTwo);
    cache.set(cacheKey, result);
    return result;
  };

  return dfs(1, 0);
};

// will be done by using dfs functions to get the minimum count of possible two dfs options
// one dfs option is when the counts are the same and the clipboard count does not need to change
// second option is when we check whether can add our clipboard target to the existing count or not to find a valid minimum path
// then final option is to check the minimum count of both the recursion and check the minimum possible count.
console.log(minStepTwoKeys(3));
