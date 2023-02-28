const findLengthOfLCIS = (nums) => {
  let endIndex = 0;
  let lengthCount = 1;
  let maxLength = 1;
  while (endIndex < nums.length) {
    if (nums[endIndex] < nums[endIndex + 1]) {
      lengthCount++;
    }
    if (endIndex === nums.length - 1 && lengthCount > 1) {
      maxLength = Math.max(maxLength, lengthCount);
    }
    if (nums[endIndex] >= nums[endIndex + 1]) {
      maxLength = Math.max(maxLength, lengthCount);
      lengthCount = 1;
    }
    endIndex++;
  }
  return maxLength;
};

//console.log(findLengthOfLCIS([1, 3, 5, 10, 7, 8]));
