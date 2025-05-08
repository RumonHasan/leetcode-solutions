const coinChangeII = (amount, coins) => {
  let cache = new Map();
  const dfs = (currIndex, currSum) => {
    // main base case
    if (currSum === amount) {
      return 1;
    }
    if (currIndex >= coins.length || currSum > amount) {
      // if no combinations found and it reaches the end then return 0
      return 0;
    }

    const key = `${currIndex}-${currSum}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    // Add the results from both paths
    let result =
      dfs(currIndex, currSum + coins[currIndex]) + dfs(currIndex + 1, currSum);

    cache.set(key, result);
    return result;
  };

  return dfs(0, 0);
};

// can use the coins infinitely but need to find how many combinations u can use to form the amount of 5
console.log(coinChangeII(5, [1, 2, 5]));
