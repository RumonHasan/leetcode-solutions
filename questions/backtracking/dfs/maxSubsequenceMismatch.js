const maxMixmatch = (nums, k) => {
  // Coordinate compression to reduce state space
  const uniqueValues = [...new Set(nums)];
  const valueMap = new Map();
  uniqueValues.forEach((val, idx) => valueMap.set(val, idx));

  // Compress the input array
  const compressedNums = nums.map((x) => valueMap.get(x));

  // Use nested Maps for more efficient caching
  const cache = new Map();

  const dfs = (currIndex, mixmatchCount, prevValue) => {
    // Check cache using nested Map structure
    if (!cache.has(currIndex)) cache.set(currIndex, new Map());
    if (!cache.get(currIndex).has(mixmatchCount))
      cache.get(currIndex).set(mixmatchCount, new Map());
    if (cache.get(currIndex).get(mixmatchCount).has(prevValue)) {
      return cache.get(currIndex).get(mixmatchCount).get(prevValue);
    }

    // Base cases
    if (mixmatchCount > k) {
      return 0;
    }
    if (currIndex >= compressedNums.length) {
      return 0;
    }

    // Skip current element
    let skipCurrent = dfs(currIndex + 1, mixmatchCount, prevValue);
    let includeCurrent = 0;

    if (compressedNums[currIndex] === prevValue || prevValue === -1) {
      // Same value or first element - no mismatch
      includeCurrent =
        1 + dfs(currIndex + 1, mixmatchCount, compressedNums[currIndex]);
    } else {
      // Different value - check if we can add a mismatch
      if (mixmatchCount + 1 <= k) {
        includeCurrent =
          1 + dfs(currIndex + 1, mixmatchCount + 1, compressedNums[currIndex]);
      }
    }

    let result = Math.max(skipCurrent, includeCurrent);

    // Store in cache
    cache.get(currIndex).get(mixmatchCount).set(prevValue, result);

    return result;
  };

  return dfs(0, 0, -1);
};

/**
 *
 * Using Dfs memoization approach to find the longest subsequence that follows the valid conditions
 * Need to use skip or include current element from current sequence in order to find the maximum subsequence
 */
console.log(maxMixmatch([1, 2, 3, 4, 5, 1], 0));
