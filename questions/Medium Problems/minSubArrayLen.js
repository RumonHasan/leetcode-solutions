const minSubarrayLen = (target, nums) => {
  let endIndex = 0;
  let startIndex = 0;
  let sum = 0;
  let minLen = Infinity;
  while (endIndex < nums.length) {
    sum += nums[endIndex];
    while (sum >= target) {
      minLen = Math.min(minLen, endIndex - startIndex + 1);
      sum -= nums[startIndex];
      startIndex++;
    }
    endIndex++;
  }
  return minLen === Infinity ? 0 : minLen;
};

//console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3]));
