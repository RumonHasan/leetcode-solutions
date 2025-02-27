const minOpPeriodicChunks = (word, k) => {
  let map = new Map();
  let string = '';
  let maxFreq = 0;
  for (let i = 0; i < word.length; i++) {
    const currChar = word[i];
    string += currChar;
    if (string.length === k) {
      map.set(string, (map.get(string) || 0) + 1);
      if (string.length) {
        maxFreq = Math.max(maxFreq, map.get(string));
      }
      string = '';
    }
  }
  // extracting the values to get the total value of partitions
  let mapVals = [...map.values()];
  let totalChunks = mapVals.reduce((a, b) => a + b, 0);
  return totalChunks - maxFreq;
};

// have to form k periodic partitions then calculate the total frequency then subtracted with the chunks to find the number of operations needed
//console.log(minOpPeriodicChunks('leetcodeleet', 4));

// easy level problem checking for box units
const maxBoxUnits = (boxTypes, truckSize) => {
  let boxCount = 0;
  let maxUnits = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    const currentUnits = boxTypes[i][1];
    const currBoxCount = boxTypes[i][0];
    const currTotalUnits = currentUnits * currBoxCount;

    maxUnits += currTotalUnits;
    boxCount += currBoxCount;

    // if its more reduce adjust then remove
    if (boxCount > truckSize) {
      const adjustCount = boxCount - truckSize;
      maxUnits -= adjustCount * currentUnits;
      break;
    }
  }

  return maxUnits;
};

console.log(
  maxBoxUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);

// getting max non overlapping sum equals to target
const maxNonOverLapping = (nums, target) => {
  let set = new Set();
  let prefixSum = 0;
  let result = 0; // contains the running counter of the number of subarrays found
  // main iteration for checking per number ¥
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    prefixSum += currNum;
    // using prefix sum approach to check whether the target set is available or nto
    if (prefixSum === target || set.has(prefixSum - target)) {
      // key condition to check middle indices can create similar subarrays or not hence causing an overlap
      result++;
      prefixSum = 0; // resetting to find the next set of pair targets
      set.clear(); // removal of set is required in order to prevent overlapping of subarrays to get the target
    } else {
      set.add(prefixSum);
    }
  }

  return result;
};

//console.log(maxNonOverLapping([-1, 3, 5, 1, 4, 2, -9], 6));

// longest substring between two equal characters
const longestSubstringBetweenTwoEqualChars = (s) => {
  let set = new Set(s.split(''));
  if (set.size === s.length) return -1;
  let maxSubLen = 0;

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const lastIndex = s.lastIndexOf(currChar);
    if (lastIndex !== -1 && lastIndex > i) {
      maxSubLen = Math.max(maxSubLen, lastIndex - i - 1);
    }
  }
  return maxSubLen;
};

console.log(longestSubstringBetweenTwoEqualChars('abca'));
