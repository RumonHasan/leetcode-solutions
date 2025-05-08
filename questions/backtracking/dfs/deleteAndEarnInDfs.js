const deleteAndEarnDfs = (nums) => {
  let map = new Map();
  let cache = new Map();
  // to fetch the actual value
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let uniqueNums = [...map.keys()];
  let maxSum = 0;
  uniqueNums.sort((a, b) => a - b);
  // skip or u take the current number
  const dfs = (index) => {
    if (index >= uniqueNums.length) {
      return 0;
    }
    // cached max result
    if (cache.has(index)) {
      return cache.get(index);
    }
    // will add the points
    let include = map.get(uniqueNums[index]) * uniqueNums[index];
    // include current index and check if its adjacent or not
    if (
      index < uniqueNums.length &&
      uniqueNums[index] + 1 !== uniqueNums[index + 1]
    ) {
      include += dfs(index + 1); // if its not adjacent then can progress from the next +1 index
    } else {
      include += dfs(index + 2); // if it is adcacent we have to start from the next index
    }
    let skip = dfs(index + 1);

    let local = Math.max(skip, include);
    cache.set(index, local);
    return local;
  };

  maxSum = dfs(0);

  return maxSum;
};

// dfs  approach
/*
    will need to extract the occurence and unique occurences in order to check for the maximum sum
    every step we are taking two decisions whether we can take the next one or not depending on the difference in their sum
*/
console.log(deleteAndEarnDfs([2, 2, 3, 3, 3, 4]));
