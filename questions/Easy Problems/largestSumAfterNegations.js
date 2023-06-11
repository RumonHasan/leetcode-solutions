const largestSumAfterNegations = (nums, k) => {
  let sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);
};

console.log(largestSumAfterNegations([2, -3, -1, 5, -4], 2));
