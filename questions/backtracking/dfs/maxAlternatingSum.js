const maxAlternatingSum = (nums) => {
  let cache = new Map();
  const dfs = (currIndex, isEven) => {
    if (currIndex >= nums.length) {
      return 0;
    }
    // basic caching and getting the curr Sum
    const key = `${currIndex}-${isEven}`;
    if (cache.has(key)) {
      return cache.get(key);
    }
    let include;
    // take the first one
    if (isEven) {
      include = nums[currIndex] + dfs(currIndex + 1, !isEven);
    } else {
      include = dfs(currIndex + 1, !isEven) - nums[currIndex];
    }
    // skipping it
    const skip = dfs(currIndex + 1, isEven);
    const result = Math.max(skip, include);
    cache.set(key, result);
    return result;
  };

  return dfs(0, true);
};

// need to get the max alternating sum
console.log(maxAlternatingSum([6, 2, 1, 2, 4, 5]));
