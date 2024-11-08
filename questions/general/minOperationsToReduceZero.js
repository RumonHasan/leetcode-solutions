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

// checking minimal subarray length then checking with available target prefix
const minSubarrayLength = (target, nums) => {
  if (target > nums.reduce((a, b) => a + b, 0)) return 0;
  let minLength = nums.length;
  let end = 0;
  let start = 0;
  let runningSum = 0;
  while (end < nums.length) {
    const currNum = nums[end];
    runningSum += currNum;
    while (start < nums.length && runningSum > target) {
      if (runningSum >= target) {
        // while reducing checking one more time so it checks the running sum
        minLength = Math.min(minLength, end - start + 1);
      }
      runningSum -= nums[start];
      start++;
    }
    if (runningSum >= target) {
      minLength = Math.min(minLength, end - start + 1);
    }
    end++;
  }
  return minLength;
};

console.log(minSubarrayLength(11, [1, 2, 3, 4, 5]));

// using dp but with the helf multidimensional dp approach
const maximumLengthOfRepeatedSubarray = (nums1, nums2) => {
  let dp = [];
  for (let i = 0; i < nums1.length + 1; i++) {
    dp.push(new Array(nums2.length + 1).fill(0));
  }
  let maxLength = 0;
  for (let i = nums1.length - 1; i >= 0; i--) {
    let valOne = nums1[i];
    for (let j = nums2.length - 1; j >= 0; j--) {
      let valTwo = nums2[j];
      if (valOne === valTwo) {
        dp[i][j] += dp[i + 1][j + 1] + 1;
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }
  }
  return maxLength;
};

//console.log(maximumLengthOfRepeatedSubarray([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
