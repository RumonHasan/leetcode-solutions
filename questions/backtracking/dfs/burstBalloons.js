const maxCoins = (nums) => {
  const cache = new Map();
  nums = [1, ...nums, 1];
  // main dfs function to return the maximum product
  const dfs = (left, right) => {
    const cacheKey = `${left}-${right}`;
    // loop to get the combination
    if (left + 1 >= right) return 0;
    // returning from cache key
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    let maxCount = 0;
    // creating combinations using loop
    for (let k = left + 1; k < right; k++) {
      maxCount = Math.max(
        maxCount,
        // has the subranges from both left and right side
        nums[left] * nums[k] * nums[right] + dfs(left, k) + dfs(k, right)
      );
    }
    let totalCount = 0;
    totalCount = maxCount + totalCount;
    cache.set(cacheKey, totalCount);
    return totalCount;
  };

  return dfs(0, nums.length - 1);
};

/**
 * using dfs to try various triplet combinations
 *
 */
//console.log(maxCoins([3, 1, 5, 8]));

const targetSum = (nums, target) => {};

console.log(targetSum());
