const minSubarrayLen = (target, nums) => {
  let end = 0;
  let minLength = Infinity;
  let start = 0;
  let total = 0;
  while (end < nums.length) {
    total += nums[end];
    while (total >= target) {
      // keep getting length and reducing the range
      minLength = Math.min(minLength, end - start + 1);
      total -= nums[start];
      start++;
    }
    end++;
  }
  return minLength === Infinity ? 0 : minLength;
};

//console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3]));
