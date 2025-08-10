const maxValueOfXCoins = (piles, k) => {
  const cache = new Map();

  const dfs = (currIndex, remaining) => {
    // base cases
    const cacheKey = `${currIndex}-${remaining}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    if (remaining === 0) {
      return 0;
    }
    if (currIndex >= piles.length) {
      return -Infinity;
    }
    // recursive step and getting the pile sum
    let maxPileSum = -Infinity;
    let currSum = 0;
    // trying k remaining combinations for every sum
    for (let x = 0; x <= Math.min(remaining, piles[currIndex].length); x++) {
      // checks for every local sum value if its bigger than the matx sum
      if (x > 0) {
        const currPileVal = piles[currIndex][x - 1];
        currSum += currPileVal;
      }
      // updates the max sum with every iteration
      maxPileSum = Math.max(
        maxPileSum,
        currSum + dfs(currIndex + 1, remaining - x)
      );
    }

    cache.set(cacheKey, maxPileSum);
    return maxPileSum;
  };

  return dfs(0, k);
};

/**HARD
 * Using dfs to try every possible combinations within each pile in order to find the maximum sum
 */
console.log(
  maxValueOfXCoins(
    [[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]],
    7
  )
);
