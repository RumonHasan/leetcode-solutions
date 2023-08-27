const maxSubarrayRetry = (nums) => {
  const basicIntuitiveApproach = () => {
    let dp = new Array(nums.length).fill(0);
    let subTotal = 0;
    for (let index = 0; index < nums.length; index++) {
      subTotal += nums[index];
      if (index === 0) {
        dp[index] = subTotal;
      }
      if (index > 0) {
        dp[index] = Math.max(dp[index - 1] + nums[index], nums[index]);
      }
    }
    return Math.max(...dp);
  };
};
// only need the max sum
//remember a subarray is the maximum sum of a certain subset of the array within the array
//console.log(maxSubarrayRetry([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
