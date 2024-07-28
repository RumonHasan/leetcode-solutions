const maxCircularSum = (nums) => {
  let globalMax = nums[0];
  let globalMin = nums[0];
  let localMin = nums[0];
  let localMax = nums[0];
  let mainTotal = nums.reduce((a, b) => a + b, 0);

  let index = 1;
  while (index < nums.length) {
    localMin = Math.min(nums[index], localMin + nums[index]);
    localMax = Math.max(nums[index], localMax + nums[index]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
    if (localMin < globalMin) {
      globalMin = localMin;
    }
    index++;
  }
  // if all are negative then then the global max can be taken directly for consideration
  if (globalMax < 0) {
    return globalMax;
  }
  return Math.max(mainTotal - globalMin, globalMax);
};

//console.log(maxCircularSum([-3, -2, -3]));
