const findsubSequences = (nums) => {
  let result = [];
  const minLen = 2;
  // using dfs to backtrack and find all the sequence
  const dfs = (index, subsequence) => {
    // only push if the subsequence length is more than its min len
    if (subsequence.length >= minLen) {
      result.push([...subsequence]);
    }
    let usedSet = new Set();
    // normal iteration for
    for (let i = index; i < nums.length; i++) {
      // here checking whether hte subsequnece is empty or not otherwise it will throw an error
      if (
        !usedSet.has(nums[i]) &&
        (subsequence[subsequence.length - 1] <= nums[i] ||
          subsequence.length === 0)
      ) {
        usedSet.add(nums[i]);
        subsequence.push(nums[i]);
        dfs(i + 1, subsequence);
        // backtracking here
        subsequence.pop();
      }
    }
  };

  dfs(0, []);

  return result;
};

// using the idea of backtracking to get the subsequence
