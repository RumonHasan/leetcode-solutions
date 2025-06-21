const stoneGameII = (piles) => {
  // failed solution
  let cache = new Map();

  // main dfs call
  const dfs = (currIndex, M) => {
    const cacheKey = `${currIndex}-${M}`;
    // base case
    if (currIndex >= piles.length) {
      return 0;
    }
    // stores the existing max of cache key
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    let maxStoneCount = -Infinity;

    // main iteration call loop where piles index length are kept under the limit while the X increases
    for (let X = 1; X <= Math.min(2 * M, piles.length - currIndex); X++) {
      let stoneCount = 0;
      for (let i = 0; i < X; i++) {
        stoneCount += piles[currIndex + i]; // adding the stones from the piles to the stoneCount
      }

      const newM = Math.max(X, M); // updating the current mulitplier
      const opponentsAdvantage = dfs(currIndex + X, newM);
      const localMaxCount = stoneCount - opponentsAdvantage;
      maxStoneCount = Math.max(maxStoneCount, localMaxCount);
    }

    cache.set(cacheKey, maxStoneCount);
    return maxStoneCount;
  };

  return dfs(0, 1); // starting the dfs at the first index and M should be 1
};

/**
 * Key logic is that there is a variable M where 2*M determines how many maxmimum piles can be taken by one person
 * each time a couple of piles taken the value of M increases but maintains withing the indices of the existing piles so that
 * the total piles taken does not exceed the existing pile set..
 * Note each time the piles are added the M value should be updated also
 *
 */
console.log(stoneGameII([2, 7, 9, 4, 4]));
