const houseRobberIICheck = (nums) => {
  const basicIntuitiveApproach = () => {
    const getTotalRobbedAmmount = (arr) => {
      let dp = new Array(arr.length).fill(0);
      for (let index = 0; index < arr.length; index++) {
        const currentVal = arr[index];
        if (index === 0) {
          dp[index] = currentVal;
        }
        // comparison and dp injection
        if (index === 1) {
          dp[index] = Math.max(dp[index - 1], currentVal);
        }
        if (index > 1) {
          dp[index] = Math.max(dp[index - 2] + currentVal, dp[index - 1]);
        }
      }
      return dp[dp.length - 1];
    };
    let seriesOne = getTotalRobbedAmmount(
      nums.length === 1 ? nums : nums.slice(0, nums.length - 1)
    );
    let seriesTwo = getTotalRobbedAmmount(
      nums.length === 1 ? nums : nums.slice(1, nums.length)
    );
    return seriesOne > seriesTwo
      ? seriesOne === undefined
        ? 0
        : seriesOne
      : seriesTwo === undefined
      ? 0
      : seriesTwo;
  };
};

console.log(houseRobberIICheck([1]));
