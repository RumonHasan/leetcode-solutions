const numberOfRollsToTarget = (n, k, target) => {
  const cache = new Map();
  const MOD = 1000000007; // 10^9 + 7

  const dfs = (diceRolls, remainingTarget) => {
    const cacheKey = `${diceRolls}-${remainingTarget}`;
    // main base case
    if (diceRolls === 0) {
      if (remainingTarget === 0) {
        return 1;
      }
      return 0;
    }
    // getting the cached value
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    if (remainingTarget < 0) {
      return 0;
    }

    let totalWays = 0;
    for (let face = 1; face <= k; face++) {
      const currFaceVal = face;
      totalWays += dfs(diceRolls - 1, remainingTarget - currFaceVal);
    }
    totalWays = totalWays % MOD;
    cache.set(cacheKey, totalWays);
    return totalWays;
  };

  return dfs(n, target);
};

console.log(numberOfRollsToTarget(2, 6, 7));
