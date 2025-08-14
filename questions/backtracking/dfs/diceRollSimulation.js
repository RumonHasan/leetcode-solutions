const diceRollSimulation = (n, rollMax) => {
  const cache = new Map();
  const MOD = 1000000007;

  const isDiceValueCheck = (currDice, prevValue, conseqCounts) => {
    if (currDice !== prevValue) {
      return true;
    }
    return conseqCounts + 1 <= rollMax[currDice - 1]; // should be at most one less than the total conseq values
  };

  const dfs = (position, prevDiceValue, consequtiveCounts) => {
    const cacheKey = `${position}-${prevDiceValue}-${consequtiveCounts}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    if (position === n) {
      return 1;
    }

    let totalWays = 0;

    for (let dice = 1; dice <= rollMax.length; dice++) {
      if (isDiceValueCheck(dice, prevDiceValue, consequtiveCounts)) {
        const newConsequtiveCounts =
          dice === prevDiceValue ? consequtiveCounts + 1 : 1;
        totalWays =
          (totalWays + dfs(position + 1, dice, newConsequtiveCounts)) % MOD;
      }
    }

    cache.set(cacheKey, totalWays);
    return totalWays;
  };

  const combinations = dfs(0, 0, 0);
  return combinations; // final combinations
};

/**
 * Checking all possible combinations using the rollMax array as a max consequtive throws
 * per dice combination
 * n would be the size of the number of dices thrown per sequence
 * main dfs function will start with a position, prevValue of the dice and the number of consequtive counts
 */
console.log(diceRollSimulation(2, [1, 1, 2, 2, 2, 3]));
