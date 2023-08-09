const rob = (nums) => {
  let dp = new Array(nums.length).fill(0);
  let end = 0;
  while (end < nums.length) {
    if (end === 0) {
      dp[end] = nums[end];
    }
    if (end === 1) {
      dp[end] = Math.max(dp[end - 1], nums[end]);
    }
    if (end > 1) {
      dp[end] = Math.max(dp[end - 2] + nums[end], dp[end - 1]);
    }
    end++;
  }
  return dp[dp.length - 1];
};

//console.log(rob([2, 7, 9, 3, 1]));
