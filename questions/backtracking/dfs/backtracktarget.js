const targetSum = (nums, target) => {
  let cache = new Map();
  const dfs = (currIndex, currSum) => {
    if (currIndex >= nums.length) {
      // main base case
      if (currSum === target) {
        return 1; // 1 is incremented if its returned the correct sum
      }
      return 0;
    }
    const key = `${currIndex}-${currSum}`;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result =
      dfs(currIndex + 1, currSum + nums[currIndex]) +
      dfs(currIndex + 1, currSum - nums[currIndex]);
    cache.set(key, result);
    return (
      dfs(currIndex + 1, currSum + nums[currIndex]) +
      dfs(currIndex + 1, currSum - nums[currIndex])
    );
  };

  return dfs(0, 0); // dfs call will have two starting points one is index and another one is sum
};

// note using dfs to choose whether to add or subtract from the main target sum before adding it to the curr local sum
//console.log(targetSum([1, 1, 1, 1, 1], 3));

// basic dfs word break problem
const wordBreak = (s, wordDict) => {
  const set = new Set([...wordDict]);
  let cache = new Map();
  // main dfs function to check whether all the partitions can be segmented withing wordict
  const dfs = (currIndex) => {
    if (currIndex >= s.length) {
      return true;
    }

    if (cache.has(currIndex)) {
      // returning the path based on cache
      return cache.get(currIndex);
    }

    // create variations from different starting points in order to check whether it can be paritioned or not
    for (let index = currIndex; index < s.length; index++) {
      const slice = s.slice(currIndex, index + 1);
      if (set.has(slice)) {
        const result = dfs(index + 1);
        if (result) {
          cache.set(currIndex, true); // have to cache the true results since the true results can lead to a valid path
          return true;
        }
      }
    }

    cache.set(currIndex, false); // checking and invalidating all the false paths
    return false;
  }; // Missing closing parenthesis here

  return dfs(0);
};

// returns true after it finds a valid path
console.log(wordBreak('applepenapple', ['apple', 'pen']));
