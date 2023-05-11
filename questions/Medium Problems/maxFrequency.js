const maxFrequency = (nums, k) => {
  nums.sort((first, second) => first - second);
  let totalSum = 0;
  let endIndex = 0;
  let startIndex = 0;
  let maxSumLength = 0;
  while (endIndex < nums.length) {
    totalSum += nums[endIndex];
    // reduce when the max range exceeds the total possible sum plus the k value
    while (nums[endIndex] * (endIndex - startIndex + 1) > totalSum + k) {
      totalSum -= nums[startIndex];
      startIndex++;
    }
    maxSumLength = Math.max(maxSumLength, endIndex - startIndex + 1);
    endIndex++;
  }
  return maxSumLength;
};

// console.log(maxFrequency([1, 2, 4], 5));
