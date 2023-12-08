const findPrefixScore = (nums) => {
  // adding the max of the prefix upto index
  const intuitiveApproach = () => {
    let dp = new Array(nums.length).fill(0);
    let end = 0;
    let maxVal = 0;
    while (end < nums.length) {
      const number = nums[end];
      if (maxVal < number) maxVal = number;
      if (end === 0) {
        dp[end] = number * 2;
      }
      if (end > 0) {
        const val = number + maxVal;
        dp[end] = dp[end - 1] + val;
      }
      end++;
    }
    return dp;
  };
};

//console.log(findPrefixScore([2, 3, 7, 5, 10]));
