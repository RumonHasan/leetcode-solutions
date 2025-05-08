const validPartition = (nums) => {
  let cache = new Map();
  const dfs = (currIndex) => {
    // base case when we traverse the entire array
    if (currIndex === nums.length) {
      return true;
    }
    // cached index will contain the result
    if (cache.has(currIndex)) {
      return cache.get(currIndex);
    }
    let result = false; // default state
    // condition 1 - two elements equal
    if (
      currIndex < nums.length - 1 &&
      nums[currIndex] === nums[currIndex + 1]
    ) {
      result = result || dfs(currIndex + 2); // increment the counter by 2
    }
    // condition 2
    if (
      currIndex < nums.length - 2 &&
      nums[currIndex] === nums[currIndex + 1] &&
      nums[currIndex] === nums[currIndex + 2]
    ) {
      result = result || dfs(currIndex + 3); // increment the counter by 2
    }
    // condition 3
    if (
      currIndex < nums.length - 2 &&
      nums[currIndex] === nums[currIndex + 1] - 1 &&
      nums[currIndex] === nums[currIndex + 2] - 2
    ) {
      result = result || dfs(currIndex + 3); // increment the counter by 2
    }

    cache.set(currIndex, result);
    return result;
  };

  return dfs(0);
};

// this question follows three conditions where each partition should satisfy one of the condition in order to work
console.log(validPartition([4, 4, 4, 5, 6]));
