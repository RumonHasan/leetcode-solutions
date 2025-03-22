const maxWidthRamp = (nums) => {
  let maxRamp = 0;

  let maxRight = new Array(nums.length).fill(0);
  maxRight[maxRight.length - 1] = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) {
    const next = maxRight[i + 1];
    const curr = nums[i];

    if (curr > next) {
      maxRight[i] = curr;
    } else {
      maxRight[i] = maxRight[i + 1];
    }
  }
  // using sliding window to check the right and find maxramp
  let right = 0;
  let left = 0;
  // two pointer approach
  while (right < nums.length) {
    if (maxRight[right] >= nums[left]) {
      maxRamp = Math.max(maxRamp, right - left);
      right++;
    } else {
      left++;
    }
  }

  return maxRamp;
};

// getting suffix sum and seeing the largest ramp
console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]));

const lenOfLongestAlphabetSub = (s) => {
  const getCharCode = (s, i) => {
    return s.charCodeAt(i);
  };
  let prevCode = getCharCode(s, 0);
  let count = 1;
  let maxCount = 1;

  for (let i = 1; i < s.length; i++) {
    const currCharCode = getCharCode(s, i);
    if (currCharCode - 1 === prevCode) {
      count++; // if its found increase the count to include all its substrings
      prevCode = currCharCode;
    } else {
      maxCount = Math.max(maxCount, count);
      prevCode = currCharCode;
      count = 1;
    }
    if (i === s.length - 1) {
      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
};

console.log(lenOfLongestAlphabetSub('abacaba'));
