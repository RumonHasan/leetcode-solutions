const maxProfitBuyAndSellWithFee = (prices, fee) => {
  let cache = new Map();

  const dfs = (day, holdingStock) => {
    const cacheKey = `${day}-${holdingStock}`;
    // main base case if nothing to buy or sell then return 0
    if (day >= prices.length) {
      return 0;
    }

    // storing existing max profits
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // main primary states that will determine the final max profit from each path of stocks being held
    let holding = 0;
    let notHolding = 0;

    // checking whether to buy or sell
    if (holdingStock) {
      let selling = dfs(day + 1, false) + (prices[day] - fee);
      let holdingCurrentStock = dfs(day + 1, holdingStock);
      holding = Math.max(selling, holdingCurrentStock); // updating the current holding stock state
    } else {
      let buy = dfs(day + 1, true) - prices[day];
      let dontBuy = dfs(day + 1, holdingStock);
      notHolding = Math.max(buy, dontBuy);
    }

    let result = Math.max(holding, notHolding);
    cache.set(cacheKey, result);
    return result;
  };

  return dfs(0, false);
  // initially starting the dfs call from false since we presume we are not holding any stock to sell
};

// using dfs structure to check whether am currently holding the stock or not to calculate the max profit
console.log(maxProfitBuyAndSellWithFee([1, 3, 2, 8, 4, 9], 2));
