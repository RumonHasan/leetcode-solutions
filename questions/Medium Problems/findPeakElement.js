const findPeakElement = (nums) => {
  let endIndex = 0;
  let peakIndex = 0;
  while (endIndex < nums.length) {
    if (nums[endIndex] < nums[endIndex + 1]) {
      while (endIndex < nums.length && nums[endIndex] < nums[endIndex + 1]) {
        endIndex++;
      }
      // edge case for two elements
      if (endIndex === nums.length - 1) {
        return endIndex;
      }
      if (nums[endIndex] > nums[endIndex + 1]) {
        peakIndex = endIndex;
        break;
      }
    } else {
      endIndex++;
    }
  }
  return peakIndex;
};
// get peak element index
//console.log(findPeakElement([1, 2]));
