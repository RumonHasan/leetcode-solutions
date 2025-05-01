const targetSum = (nums, target) => {
  let cache = new Map();
  // main dfs function
  const dfs = (currIndex, currSum) => {
    // note this funciton depends on both current index and currSum
    if (currIndex >= nums.length) {
      // base case if a case is found that is equal to target then return 1 else return 0
      if (currSum === target) {
        return 1;
      } else {
        return 0;
      }
    }
    const cacheKey = `${currIndex}-${currSum}`;
    if (cache.has(cacheKey)) {
      // returning cache containing the curr result count
      return cache.get(cacheKey);
    }
    // main recursive case for both the addition and substraction case
    let addOne = dfs(currIndex + 1, currSum + nums[currIndex]);
    let subtractOne = dfs(currIndex + 1, currSum - nums[currIndex]);

    let result = addOne + subtractOne;

    cache.set(cacheKey, result); // setting the cache with a proper cache key that is depended on currIndex and currSum

    return result;
  };

  return dfs(0, 0);
};

// using dfs to solve nums and target.... adding an additional values for currSum plus target sum
console.log(targetSum([1, 1, 1, 1, 1], 3));
