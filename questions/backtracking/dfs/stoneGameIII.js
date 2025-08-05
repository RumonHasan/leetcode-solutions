const stoneGameIII = (stoneValue) => {
  const cache = new Map();
  const n = stoneValue.length;

  // main dfs function recursively calculate optimal difference
  const dfs = (currIndex) => {
    const key = currIndex;
    // cached maximum difference
    if (cache.has(key)) {
      return cache.get(key);
    }
    if (currIndex >= stoneValue.length) {
      return 0;
    }

    let maxDifference = -Infinity;
    // calculating all combinations but maintaining the take amounts should be within the bounds
    for (let take = 1; take <= 3 && currIndex + take <= n; take++) {
      let aliceSum = 0;
      // gets the current sum from the single recursive chain of the stones picked
      for (let index = 0; index < take; index++) {
        aliceSum += stoneValue[currIndex + index];
      }
      let aliceAdvantage = aliceSum - dfs(currIndex + take); // would be sum of alice combination and the remaining combination goes to bob
      maxDifference = Math.max(aliceAdvantage, maxDifference);
    }

    cache.set(key, maxDifference);
    return maxDifference;
  };

  const maxDifferenceOptimal = dfs(0);

  // result declaration
  if (maxDifferenceOptimal > 0) return 'Alice';
  if (maxDifferenceOptimal < 0) return 'Bob';

  return 'Tie';
};

/**
 * base calculation is for calculating the advantage of Alice in order to make sure whether is a tie or loss
 */
console.log(stoneGameIII([1, 2, 3, 7]));
