const maxSubarray = (nums) => {
  let dp = new Array(nums.length).fill(0);
  for (let index = 0; index < dp.length; index++) {
    if (index === 0) {
      dp[index] = nums[index];
    }
    if (index > 0) {
      const addedPrefix = dp[index - 1] + nums[index];
      dp[index] = Math.max(addedPrefix, nums[index]);
    }
  }
  return Math.max(...dp);
};

//console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
