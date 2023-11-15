const largestSumAverages = (nums, k) => {
  console.log(nums);

  const masterApproach = () => {
    const n = nums.length;
    const memo = new Array(n).fill(null).map(() => new Array(k + 1).fill(null));

    // getting averages based on start and end indexes and slicing the entire array
    function average(start, end) {
      return (
        nums.slice(start, end + 1).reduce((a, b) => a + b, 0) /
        (end - start + 1)
      );
    }
    // main recursive function
    function dp(start, k) {
      if (memo[start][k] !== null) {
        return memo[start][k];
      }
      if (k === 1) {
        return average(start, n - 1);
      }
      let maxAvg = 0;
      for (let i = start; i < n - k + 1; i++) {
        console.log(start, i);
        maxAvg = Math.max(maxAvg, average(start, i) + dp(i + 1, k - 1));
      }
      memo[start][k] = maxAvg;
      return maxAvg;
    }

    return dp(0, k);
  };
  console.log(masterApproach());
};

console.log(largestSumAverages([9, 1, 2, 3, 9], 3));
