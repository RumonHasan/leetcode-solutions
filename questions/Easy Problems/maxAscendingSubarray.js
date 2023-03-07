const maxAscendingSum = (nums) => {
  // egde case for one number
  if (nums.length === 1) {
    return nums[0];
  }
  let maxSumArray = [];
  let localSum = 0;
  for (let index = 1; index < nums.length; index++) {
    if (index === 1) {
      if (nums[index - 1] >= nums[index]) {
        maxSumArray.push(nums[index - 1]);
      } else if (nums[index - 1] < nums[index]) {
        localSum += nums[index - 1];
      }
    }
    if (nums[index] > nums[index - 1]) {
      localSum += nums[index];
    }
    if (nums[index] <= nums[index - 1]) {
      maxSumArray.push(localSum);
      localSum = nums[index];
    }
    if (index === nums.length - 1) {
      maxSumArray.push(localSum);
    }
  }
  return Math.max(...maxSumArray);
};
// returning the largest sum of ascending subarray;
// console.log(maxAscendingSum([2, 2, 3, 4, 5, 2]));
