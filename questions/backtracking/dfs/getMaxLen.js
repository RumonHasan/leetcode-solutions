const getMaxLen = (nums) => {
  let maxLen = 0;
  const cache = new Map();

  const dfs = (index, productSign) => {
    if (index >= nums.length || nums[index] === 0) return 0;

    const cacheKey = `${index}-${productSign}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    const newSign = nums[index] > 0 ? productSign : -productSign;
    const subLen = 1 + dfs(index + 1, newSign);

    // Only update maxLen if the total product is positive
    if (newSign > 0) {
      maxLen = Math.max(maxLen, subLen);
    }

    cache.set(cacheKey, subLen);
    return subLen;
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const initialSign = nums[i] > 0 ? 1 : -1;
      dfs(i, initialSign);
    }
  }

  return maxLen;
};

console.log(getMaxLen([0, 1, -2, -3, -4]));
