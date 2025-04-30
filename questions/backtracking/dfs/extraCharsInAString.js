const extraCharsInString = (s, dictionary) => {
  let skipped = 0;
  let set = new Set([...dictionary]);
  let cache = new Map();
  // main dfs to calculate the minimum skip counter
  const dfs = (currIndex) => {
    // returns 0 because no more characters left to process
    if (currIndex >= s.length) {
      return 0;
    }
    // if the cache returns an existing count then return it
    if (cache.has(currIndex)) {
      return cache.get(currIndex);
    }
    let skipOne = 1 + dfs(currIndex + 1); // skipping the current character and increasing the count
    // include the current one
    for (let index = currIndex; index < s.length; index++) {
      const slice = s.slice(currIndex, index + 1);
      if (set.has(slice)) {
        skipOne = Math.min(dfs(index + 1), skipOne); // including the current one and getting the minium value from the current index start
      }
    }
    cache.set(currIndex, skipOne); // cached result
    return skipOne;
  };

  skipped = dfs(0);
  return skipped;
};

console.log(extraCharsInString('leetscode', ['leet', 'code', 'leetcode']));

// solving house robber problem with dfs
const houseRobberUsingDfsMemo = (nums) => {
  let maxRob = 0;
  let cache = new Map(); // caching the current robbed sum
  // rob dfs function
  const rob = (currIndex) => {
    if (currIndex >= nums.length) {
      return 0;
    }
    // getting currIndex rob sum
    if (cache.has(currIndex)) {
      return cache.get(currIndex); // fetch the current rob amount if its there in the map
    }
    let robCurrent = nums[currIndex] + rob(currIndex + 2); // skip the adjacent
    let skipCurrent = rob(currIndex + 1); // skip the current

    let maxRob = Math.max(robCurrent, skipCurrent);
    cache.set(currIndex, maxRob);
    return maxRob;
  };

  maxRob = rob(0);
  return maxRob;
};

console.log(houseRobberUsingDfsMemo([2, 7, 9, 3, 1]));
