const lengthOfLIS = (nums) => {
  const generalIntuitiveApproach = (nums) => {
    let centralIndex = 1;
    let maxLength = 0;
    if (nums.length === 1) return 1;
    let dp = new Array(nums.length).fill(1);
    while (centralIndex < nums.length) {
      for (let index = 0; index < centralIndex; index++) {
        if (nums[index] < nums[centralIndex]) {
          dp[centralIndex] = Math.max(dp[centralIndex], dp[index] + 1);
          maxLength = Math.max(maxLength, dp[centralIndex]);
        } else {
          maxLength = Math.max(maxLength, dp[centralIndex]);
        }
      }
      centralIndex++;
    }
    return maxLength;
  };
};
// core logic is used for prefix sum
// base logic is to gather all the total number of increments of each subsequence and keep adding for the numbers
// checking for every possible subsequence and checking always for the greater than condition
// console.log(lengthOfLIS([7, 7, 7, 7]));
