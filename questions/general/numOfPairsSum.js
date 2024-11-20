const numOfPairs = (nums, target) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const checkStr = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const sub = nums[j];
        if (checkStr + sub === target) {
          counter++;
        }
      }
    }
  }
  return counter;
};

// checking how many pairs equal to target; need to find the suffix in order to check
//console.log(numOfPairs(['74', '1', '67', '1', '74'], '174'));

const meanOperationsToMakeKEqual = (nums, k) => {
  nums.sort((a, b) => a - b); // once sorted the element will be on the right side
  const medianElement = nums[Math.floor(nums.length / 2)];
  let centralCounter = 0;
  let midIndex = Math.floor(nums.length / 2);
  // reduce left
  if (medianElement > k) {
    while (midIndex >= 0) {
      const curr = nums[midIndex];
      if (curr <= k) break;
      centralCounter += Math.abs(k - curr);
      midIndex--;
    }
  } else {
    // increase right if median is less than k
    while (midIndex < nums.length) {
      const curr = nums[midIndex];
      if (curr >= k) break;
      centralCounter += Math.abs(k - curr);
      midIndex++;
    }
  }
  return centralCounter++;
};

// if the median is less than or equal to k increase the value in the right half and if the median is greater than k reduce the values in left half
//console.log(meanOperationsToMakeKEqual([45, 50, 89, 30, 4, 5, 91, 58], 31));

// checking for unique set if so getting the final length
const maxProductWords = (words) => {
  let setCollection = [];
  for (let word of words) {
    setCollection.push(new Set(word.split('')));
  }
  let maxLen = 0;
  for (let i = 0; i < words.length; i++) {
    for (j = i + 1; j < words.length; j++) {
      const checkArray = [...setCollection[i]];
      const checkSet = setCollection[j];
      const check = checkArray.some((letter) => checkSet.has(letter));
      if (!check) {
        maxLen = Math.max(maxLen, words[i].length * words[j].length);
      }
    }
  }
  return maxLen;
};

//console.log(maxProductWords(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']));

const findNumberOfLis = (nums) => {
  let dp = new Array(nums.length).fill(1);
  let count = new Array(nums.length).fill(1);
  for (let i = nums.length - 1; i >= 0; i--) {
    const checkEl = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > checkEl) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
          // tracks the count of the next series if the dp length is more or an additional sequence is possible
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
  }
  let maxLen = Math.max(...dp);
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] === maxLen) {
      result += count[i];
      break;
    }
  }
  return result;
};

console.log(findNumberOfLis([7, 1, 3, 5, 4, 7]));
