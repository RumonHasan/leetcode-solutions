const lengthOfLIS = (nums) => {
  const cuteApproach = () => {
    let dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
      const limit = nums[i];
      for (let j = 0; j < i; j++) {
        const numCheck = nums[j];
        if (limit > numCheck) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    return Math.max(...dp);
  };
};

//console.log(lengthOfLIS([2, 10, 3, 7, 101, 18]));

/* 
    [1, 1, 1, 1]
    1 , 2, 
*/
