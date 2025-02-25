const countHomogenous = (s) => {
  let counter = 0;
  const MOD = 1000000007;
  if (s.length === 1) return 1;
  const subCalculate = (n) => {
    return (n * ((n + 1) / 2)) % MOD;
  };

  let prevChar = s[0];
  let charCount = 1;

  for (let i = 1; i < s.length; i++) {
    const currChar = s[i];
    if (currChar === prevChar) {
      charCount++;
    } else {
      counter += subCalculate(charCount);
      charCount = 1;
      prevChar = currChar;
    }
    // last index check
    if (i === s.length - 1) {
      counter += subCalculate(charCount);
    }
  }

  return counter;
};

console.log(countHomogenous('abbcccaa'));

// TLE approach
const minAbsoluteDifference = (nums, x) => {
  let minDiff = Infinity;
  if (x === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    const mainNum = nums[i];
    for (let j = i + x; j < nums.length; j++) {
      const checkNum = nums[j];
      const indexDiff = j - i;
      if (indexDiff >= x) {
        minDiff = Math.min(minDiff, Math.abs(checkNum - mainNum));
      }
    }
  }

  return minDiff;
};

//console.log(minAbsoluteDifference([5, 3, 2, 10, 15], 1));

// getting the number of subarrays with odd array sums
const numOfSubarrays = (arr) => {
  let finalCounter = 0;
  let prefSum = new Array(arr.length).fill(0);
  let oddSumCounter = 0;
  let evenSumCounter = 1;
  const MOD = 1000000007;
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    prefSum[i] = (prefSum[i - 1] ? prefSum[i - 1] : 0) + currNum; // pref sum iteration
    // to check whether curr pref sum is even or not then switching the values
    const currPrefSum = prefSum[i];
    if (currPrefSum % 2 === 0) {
      evenSumCounter++;
      // adding the left over odd sums if the curr pref sum is even
      finalCounter += oddSumCounter;
    } else if (currPrefSum % 2 === 1) {
      oddSumCounter++;
      finalCounter += evenSumCounter;
    }
  }

  return finalCounter % MOD;
};

console.log(numOfSubarrays([1, 3, 5]));
