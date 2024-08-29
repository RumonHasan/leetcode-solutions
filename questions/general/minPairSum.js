const minPairSum = (nums) => {
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    let pairSum = nums[i] + nums[nums.length - i - 1];
    max = Math.max(max, pairSum);
  }
  return max;
};

console.log(minPairSum([3, 5, 4, 2, 4, 6]));
