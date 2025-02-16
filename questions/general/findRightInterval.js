const findRightInterval = (intervals) => {
  let result = new Array(intervals.length).fill(-1);
  // brute forces and checks all the interval combination to get the right interval
  const getRightInterval = (currEndTime, intervals) => {
    let currentStartTime = Infinity;
    let foundIndex = -1;
    for (let index = 0; index < intervals.length; index++) {
      const localStartTime = intervals[index][0];
      // remember the current interval index can also be a strong candidate for getting the closest next starting range
      if (currEndTime <= localStartTime && currentStartTime > localStartTime) {
        // make sure to reduce currrentStartTime
        currentStartTime = localStartTime;
        foundIndex = index;
      }
    }
    return foundIndex;
  };
  // main iteration
  for (let i = 0; i < intervals.length; i++) {
    const currInterval = intervals[i];
    const foundIntervalIndex = getRightInterval(currInterval[1], intervals);
    result[i] = foundIntervalIndex; // storing the final found index in the result array.
  }
  return result;
};

// brute force approach checking each interval one by one and finding the smallest related start and end times.
// console.log(
//   findRightInterval([
//     [1, 1],
//     [3, 4],
//   ])
// );
// 1D dynamic programming problem
const deleteAndEarn = (nums) => {
  let map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // getting the unique numbers for mapping them with occurences later
  nums = [...new Set([...nums])];
  let dp = new Array(nums.length).fill(0);
  nums.sort((a, b) => a - b); // sorting to check for nums -1 or nums + 1
  // main iteration using 1D dynamic programming approach
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const currentValue = map.get(currNum) * currNum;
    if (i === 0) {
      dp[i] = currentValue;
    }
    if (i === 1) {
      if (currNum - 1 === nums[i - 1]) {
        dp[i] = Math.max(dp[i - 1], currentValue);
      } else {
        dp[i] = currentValue + dp[i - 1];
      }
    }
    // if its generally bigger than one then dp can backtrack to two values
    if (i > 1) {
      if (currNum - 1 === nums[i - 1]) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + currentValue);
      } else {
        dp[i] = currentValue + dp[i - 1];
      }
    }
  }
  return dp[dp.length - 1]; // last element will contain the largest element
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
