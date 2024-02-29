const maxAbsSum = (nums) => {
  let dp_two = new Array(nums.length).fill(0);
  let dp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let curr_num = nums[i];
    if (i === 0) {
      dp[i] = curr_num;
      dp_two[i] = curr_num;
    }
    if (i > 0) {
      let sum_min = dp[i - 1] + curr_num;
      let sum_max = dp_two[i - 1] + curr_num;
      dp[i] = Math.min(sum_min, curr_num);
      dp_two[i] = Math.max(sum_max, curr_num);
    }
  }
  let max = -Infinity;
  for (let index in dp) {
    let local_max = Math.abs(
      Math.max(Math.abs(dp[index]), Math.abs(dp_two[index]))
    );
    max = Math.max(max, local_max);
  }
  return max;
};

//console.log(maxAbsSum([2, -5, 1, -4, 3, -2]));
