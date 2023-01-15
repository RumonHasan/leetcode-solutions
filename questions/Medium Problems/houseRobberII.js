const robII = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  const first = nums.slice(0, nums.length - 1);
  const second = nums.slice(1, nums.length);
  const robberyStatus = (first) => {
    let dp = new Array(first.length).fill(0);
    for (let i = 0; i < first.length; i++) {
      if (i === 0) {
        dp[i] = first[i];
      }
      if (i === 1) {
        dp[i] = Math.max(dp[i - 1], first[i]);
      }
      if (i > 1) {
        dp[i] = Math.max(dp[i - 2] + first[i], dp[i - 1]);
      }
    }
    return dp;
  };
  let dpOne = robberyStatus(first);
  let dpTwo = robberyStatus(second);
  let result = Math.max(Math.max(...dpOne), Math.max(...dpTwo));
  return result === Infinity ? 0 : result;
};

//console.log(robII([1, 3, 1, 3, 100]));

// getting the maximum amount u can rob in a circular pattern house arrangements
