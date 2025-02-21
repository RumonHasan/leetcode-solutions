const nonDecreasingSubsequence = (nums) => {
  let result = [];
  const limit = 2; // condition

  // main dfs function to check from every starting index
  const dfs = (index, subSequence) => {
    if (subSequence.length >= limit) {
      result.push([...subSequence]);
    }
    let usedSet = new Set(); // set declared within the recursive loop because we want to clear the sequence after every call stack is completed

    for (let i = index; i < nums.length; i++) {
      if (!usedSet.has(nums[i])) {
        // here set is for checking whether the number is present within the current subsequence or not
        if (
          subSequence[subSequence.length - 1] <= nums[i] || // keeping a check for greater or equal to element
          subSequence.length === 0
        ) {
          usedSet.add(nums[i]);
          subSequence.push(nums[i]);
          dfs(i + 1, subSequence); // main dfs that stacks up recursive calls and checks till the start
          subSequence.pop(); // popping an element for backtracking channels and going back to the starting point and checking whether there will be any duplicates
        }
      }
    }
  };
  dfs(0, []); // initial call
  return result;
};

console.log(nonDecreasingSubsequence([4, 6, 7, 7]));

/**
 * Dfs notes for backtracking
 * if a single index is passed then it means inherently all starting indices and recursive calls are made from the start mentioned index
 */
