const minSwapOne = (nums) => {
  let oneCount = 0;
  let swapCount = Infinity;
  for (let num of nums) {
    num === 1 && oneCount++;
  }
  nums = [...nums, ...nums];
  let window = oneCount;
  // checking initial window
  let localOneCount = 0;
  for (let i = 0; i < window; i++) {
    if (nums[i] === 1) {
      localOneCount++;
    }
  }
  swapCount = Math.min(swapCount, oneCount - localOneCount); // checking initial swap count;
  // sliding window
  let end = window;
  let start = 0;
  while (end < nums.length) {
    if (nums[start] === 1) localOneCount--;
    if (nums[end] === 1) localOneCount++;
    swapCount = Math.min(swapCount, oneCount - localOneCount);
    start++;
    end++;
  }
  return swapCount;
};

console.log(minSwapOne([1, 1, 0, 0, 1]));
