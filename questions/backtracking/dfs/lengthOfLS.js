const lengthOfLongestSubsequence = (nums, target) => {
  const dp = Array(nums.length)
    .fill()
    .map(() => Array(target + 1).fill(-2));
  console.log(dp);

  const dfs = (currIndex, currSum) => {
    if (currSum > target) {
      return -Infinity;
    }

    if (currSum === target) {
      return 0;
    }
    // since its -1 needed we return -Infinity instead
    if (currIndex >= nums.length) {
      return -Infinity;
    }

    if (dp[currIndex][currSum] !== -2) {
      return dp[currIndex][currSum];
    }

    // include the first
    let include = 1 + dfs(currIndex + 1, currSum + nums[currIndex]);
    // not included so not adding +1
    let notIncluded = dfs(currIndex + 1, currSum);

    let maxLength = Math.max(include, notIncluded);

    dp[currIndex][currSum] = maxLength > 0 ? maxLength : -1;

    return dp[currIndex][currSum];
  };

  return dfs(0, 0);
};

console.log(lengthOfLongestSubsequence([4, 1, 3, 2, 1, 5], 7));
