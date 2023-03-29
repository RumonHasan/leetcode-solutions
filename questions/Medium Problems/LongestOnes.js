const longestOnes = (nums, k) => {
  let endIndex = 0;
  let startIndex = 0;
  let zeroCounter = 0;
  let maxLen = 0;
  while (endIndex < nums.length) {
    if (nums[endIndex] === 0) {
      zeroCounter++;
    }
    while (zeroCounter > k) {
      if (nums[startIndex] === 0) {
        zeroCounter--;
      }
      startIndex++;
    }
    // takes the max length of the endIndex to startindex just before increasing one more time
    maxLen = Math.max(maxLen, endIndex - startIndex + 1);
    endIndex++;
  }
  return maxLen;
};
// finding the longest list of ones with k additions... one will be ignored
//console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
