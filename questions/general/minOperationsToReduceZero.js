const minReduceToZero = (nums, x) => {
  const target = nums.reduce((a, b) => a + b, 0) - x;
  let start = 0;
  let sum = 0;
  let maxLen = -1;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (start < nums.length && sum > target) {
      sum -= nums[start];
      start++;
    }
    if (sum === target) {
      maxLen = Math.max(maxLen, end - start + 1);
    }
  }
  return maxLen === -1 ? maxLen : nums.length - maxLen;
};

//console.log(minReduceToZero([5, 6, 7, 8, 9], 4));

// min swaps to make 0s and 1s consequtive and even length in per substring
const minChange = (s) => {
  // edge cases
  const sArray = s.split('');
  if (
    sArray.every((letter) => letter === '0') ||
    sArray.every((letter) => letter == '1')
  )
    return 0;
  let swaps = 0;
  for (let i = 1; i < s.length; i += 2) {
    const curr = s[i];
    const prev = s[i - 1];
    if (curr !== prev) {
      swaps++;
    }
  }
  return swaps;
};

//console.log(minChange('1001'));
