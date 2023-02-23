const maximumDifference = (nums) => {
  let maximumSum = -1;
  for (let index = 0; index < nums.length; index++) {
    for (
      let secondIndex = index + 1;
      secondIndex < nums.length;
      secondIndex++
    ) {
      if (nums[secondIndex] > nums[index]) {
        const differnce = nums[secondIndex] - nums[index];
        maximumSum = Math.max(maximumSum, differnce);
      }
    }
  }

  return maximumSum;
};

console.log(maximumDifference([87, 68, 91, 86, 58, 63, 43, 98, 6, 40]));
