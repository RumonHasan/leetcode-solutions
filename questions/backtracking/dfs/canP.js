const canPartition = (nums) => {
  const cache = new Map();
  let total = nums.reduce((a, b) => a + b, 0);
  if (!(total % 2 === 0)) return false;
  let sub = total / 2;

  const recurse = (index, currSum) => {
    const cacheKey = index * 10001 + currSum;
    if (currSum === sub) {
      return true;
    }
    if (index >= nums.length || currSum > sub) {
      return false;
    }
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    let skip = recurse(index + 1, currSum);
    let include = recurse(index + 1, currSum + nums[index]);

    const result = skip || include;
    cache.set(cacheKey, result);
    return result;
  };

  return recurse(0, 0);
};

console.log(canPartition([1, 5, 11, 5]));
