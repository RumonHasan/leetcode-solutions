const coinChangeII = (amount, coins) => {
  const memo = new Map();
  // main dfs function to count down and calculate all the path
  const dfs = (currIndex, remainingAmount) => {
    const key = `${currIndex}-${remainingAmount}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    if (currIndex >= coins.length) {
      return 0;
    }
    // main base case
    if (remainingAmount === 0) {
      return 1;
    }
    if (remainingAmount < 0) {
      return 0;
    }
    // skip current
    let skip = dfs(currIndex + 1, remainingAmount);
    let include = dfs(currIndex, remainingAmount - coins[currIndex]);

    let result = skip + include;
    memo.set(key, result);
    return result;
  };
  return dfs(0, amount);
};

// using dfs to count down instead of counting up
console.log(coinChangeII(5, [1, 2, 5]));
