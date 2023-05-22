const longestSubarray = (nums) => {
  let startIndex = 0;
  let endIndex = 0;
  let count = 0;
  let maxLength = 0;
  while (endIndex < nums.length) {
    if (nums[endIndex] === 0) count++;
    while (count > 1) {
      // reduce the length till count reaches 1 again
      if (nums[startIndex] === 0) {
        count--;
      }
      startIndex++;
    }
    maxLength = Math.max(maxLength, endIndex - startIndex); // no minus since its based on deletion
    endIndex++;
  }
  return maxLength;
};

// after deleting one element and check the number of consequtive ones
//console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
