const getAverage = (nums, k) => {
  let dp = new Array(nums.length).fill(-1);
  const kLen = BigInt(2 * k + 1);
  let total = 0n;
  let end = 0;
  let index = 0;
  while (index < kLen) {
    total += nums[index];
    index++;
  }
  let midPoint = index - k - 1;
  let average = Math.floor(total / kLen);
  dp[midPoint] = average;
  // using sliding window to calculate the remaining slots
  end = kLen;
  let start = 0;
  while (end < nums.length) {
    total -= nums[start];
    total += nums[end];
    average = Math.floor(total / kLen);
    // updating the average in the dp based on the mid point
    let midPoint = end - k;
    dp[midPoint] = average;
    start++;
    end++;
  }
  return dp;
};
// so the total length of the array set is always gonna be an odd number
//console.log(getAverage([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
