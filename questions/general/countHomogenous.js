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

//console.log(numOfSubarrays([1, 3, 5]));

// getting min sum and max sum and comparing with the abs version
const maxAbsoluteSum = (nums) => {
  let maxEnding = nums[0];
  let minEnding = nums[0];

  if (nums.length === 1) {
    return Math.abs(nums[0]);
  }

  let resMax = maxEnding;
  let resMin = minEnding;

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    maxEnding = Math.max(currNum, maxEnding + currNum);
    if (resMax <= maxEnding) resMax = maxEnding;
  }

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    minEnding = Math.min(currNum, minEnding + currNum);
    if (resMin >= minEnding) resMin = minEnding;
  }

  console.log(resMax, resMin);

  return Math.max(Math.abs(resMax), Math.abs(resMin));
};

//console.log(maxAbsoluteSum([2, -1]));

const shortestDistanceToChar = (s, c) => {
  let charForce = 0;
  const arrCreator = (len) => {
    return new Array(len).fill(0);
  };
  let distance = arrCreator(s.length);
  let left = arrCreator(s.length);
  let right = arrCreator(s.length);
  // from left to right check
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (currChar === c) {
      charForce = s.length;
    } else {
      charForce = Math.max(0, charForce - 1);
    }
    left[i] = charForce;
  }
  charForce = 0;
  // from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    const currChar = s[i];
    if (currChar === c) {
      charForce = s.length;
    } else {
      charForce = Math.max(0, charForce - 1);
    }
    right[i] = charForce;
  }
  charForce = s.length;

  for (let i = 0; i < distance.length; i++) {
    if ((left[i] === right[i]) === charForce) {
      distance[i] = 0;
    } else {
      const maxClose = Math.max(right[i], left[i]);
      distance[i] = charForce - maxClose;
    }
  }

  return distance;
};

// console.log(shortestDistanceToChar('loveleetcode', 'e'));

const checkDistances = (s, distance) => {
  let map = new Map();
  for (let i = 0; i < distance.length; i++) {
    const char = String.fromCharCode(97 + i);
    map.set(char, [distance[i]]);
  }
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (map.get(currChar).length === 2) {
      map.get(currChar).push(i - map.get(currChar)[1] - 1);
    } else {
      map.get(currChar)[1] = i;
    }
    const currVal = map.get(currChar);
    if (currVal.length === 3 && currVal[2] !== currVal[0]) {
      return false;
    }
  }
  return true;
};

console.log(
  checkDistances(
    'abaccb',
    [
      1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
