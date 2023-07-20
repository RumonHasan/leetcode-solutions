const findClosestNumber = (nums) => {
  const uglySolution = () => {
    let dp = [];
    let minDifference = Infinity;
    for (let index in nums) {
      const num = nums[index];
      const difference = Math.abs(num - 0);
      dp.push({ num: num, difference: difference });
      minDifference = Math.min(minDifference, dp[index].difference);
    }
    let minArray = [];
    for (let index in dp) {
      if (dp[index].difference === minDifference) {
        minArray.push(dp[index].num);
      }
    }
    return minArray.sort((a, b) => b - a)[0];
  };
};

//console.log(findClosestNumber([-4, -2, 1, 4, 8]));
