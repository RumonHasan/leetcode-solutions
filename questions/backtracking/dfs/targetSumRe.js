const targetSum = (nums, target) => {
  const cache = new Map();

  const dfs = (currIndex, currSum) => {
    const cacheKey = `${currIndex}-${currSum}`;
    // base case
    if (currIndex >= nums.length) {
      if (currSum === target) {
        return 1;
      }
      return 0;
    }
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    let totalWays =
      dfs(currIndex + 1, currSum + nums[currIndex]) +
      dfs(currIndex + 1, currSum - nums[currIndex]);
    cache.set(cache, totalWays);
    return totalWays;
  };

  return dfs(0, 0); // passing current index and sum
};

// calculate the number of ways when all of them added can be sum of 3
console.log(targetSum([1, 1, 1, 1, 1], 3));
