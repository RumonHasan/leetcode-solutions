const coinChange = (coins, amount) => {
  const cache = new Map();

  const dfs = (currAmount) => {
    if (currAmount === amount) {
      return 0;
    }
    if (currAmount > amount) {
      return -1;
    }
    if (cache.has(currAmount)) {
      return cache.get(currAmount);
    }
    let minimumCoins = Infinity;

    // uses multiple coins at the same time
    for (const coin of coins) {
      let result = dfs(coin + currAmount); // initial result
      if (result !== -1) {
        minimumCoins = Math.min(minimumCoins, 1 + result); // minimum coins needed
      }
    }
    const filteredMinCoins = minimumCoins === Infinity ? -1 : minimumCoins;
    cache.set(currAmount, filteredMinCoins);
    return filteredMinCoins;
  };

  return dfs(0);
};

console.log(coinChange([1, 2, 5], 11));
