const longestIncreasingSubsequence = (nums) => {
  let dp = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

//console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));

// slowest key press O(n) but ugly solution
const slowestKey = (releaseTimes, keysPressed) => {
  let keys = [];
  let keyMap = new Map();
  let maxDuration = 0;
  for (let i = 0; i < releaseTimes.length; i++) {
    const currKey = keysPressed[i];
    const currReleaseTime = releaseTimes[i];
    const prevReleaseTime = releaseTimes[i - 1];
    let duration = 0;

    if (i === 0) {
      duration = currReleaseTime;
    } else {
      duration = currReleaseTime - prevReleaseTime;
    }
    maxDuration = Math.max(duration, maxDuration);
    if (keyMap.has(currKey)) {
      if (keyMap.get(currKey) < duration) {
        keyMap.set(currKey, duration);
      }
    } else {
      keyMap.set(currKey, duration);
    }
  }
  for (let [key, value] of keyMap) {
    if (value === maxDuration) {
      keys.push(key);
    }
  }
  return keys.sort((a, b) => b.localeCompare(a))[0];
};

//console.log(slowestKey([9, 29, 49, 50], 'cbcd'));

const binarySubstring = (s) => {
  // making groups
  let groups = [];
  let counter = 1;
  let prev = s[0];
  for (let i = 1; i < s.length; i++) {
    const currChar = s[i];
    if (currChar == prev) {
      counter++;
    } else {
      groups.push(counter);
      counter = 1;
      prev = currChar;
    }
    if (i === s.length - 1) {
      groups.push(counter);
    }
  }
  // have to take the minimum value of the adjacent pairs since 1s and 0s should be consequtive
  let sum = 0;
  for (let index = 1; index < groups.length; index++) {
    const curr = groups[index];
    const prev = groups[index - 1];
    sum += Math.min(curr, prev);
  }
  return sum;
};

console.log(binarySubstring('00110011'));
