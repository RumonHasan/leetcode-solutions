// working TLE solution because dfs here will be well over memory and run time alocation
const longestIncreasingSub = (nums) => {
  let cache = new Map();
  // dfs memoization with considering skipping or adding current element
  const dfs = (currIndex, prevIndex) => {
    const cacheKey = `${currIndex}-${prevIndex}`;
    if (currIndex >= nums.length) {
      return 0;
    }
    // existing cached max longest subsequence
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    // skip and included logic
    let skipCurrent = dfs(currIndex + 1, prevIndex);
    let included = 1;

    // core dfs logic to add a number if the prev number is bigger
    if (nums[currIndex] > nums[prevIndex] || prevIndex === -1) {
      included = 1 + dfs(currIndex + 1, currIndex);
    } else {
      included = 0; // this is 0 because from this current index path there is no potential starting value that can lead to a new subsequence yet
    }

    let result = Math.max(skipCurrent, included);
    cache.set(cacheKey, result);
    return result;
  };

  return dfs(0, -1);
};

// using dfs approach to find the length of the longest increasing subsequence
// console.log(longestIncreasingSub([10, 9, 2, 5, 3, 7, 101, 18]));

// creating max unique split
const maxUniqueSplit = (s) => {
  let result = [];
  let max = 0;

  const backtrack = (currIndex, sub, set) => {
    if (currIndex >= s.length) {
      result.push([...sub]);
      max = Math.max(max, sub.length);
      return;
    }
    for (let i = currIndex; i < s.length; i++) {
      const slice = s.slice(currIndex, i + 1);
      if (!set.has(slice)) {
        set.add(slice);
        sub.push(slice);
        backtrack(i + 1, sub, set);
        set.delete(slice);
        sub.pop();
      }
    }
  };

  backtrack(0, [], new Set());
  return max;
};

console.log(maxUniqueSplit('ababccc'));
