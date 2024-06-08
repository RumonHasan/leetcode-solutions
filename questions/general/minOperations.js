const minOperations = (nums, x) => {
  let maxWindow = -Infinity;
  let end = 0;
  let start = 0;
  let currSum = 0;
  let target = nums.reduce((a, b) => a + b, 0) - x;
  while (end < nums.length) {
    currSum += nums[end];
    while (start <= end && currSum > target) {
      currSum -= nums[start];
      start++;
    }
    if (currSum === target) {
      maxWindow = Math.max(maxWindow, end - start + 1);
    }
    end++;
  }
  let minWindow = nums.length - maxWindow;
  return minWindow;
};

console.log(minOperations([5, 2, 3, 1, 1], 5));
