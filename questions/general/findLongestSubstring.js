const findLongestSubstring = (s) => {
  const evenVowelCheck = (str) => {
    let map = new Map([
      ['a', 0],
      ['i', 0],
      ['e', 0],
      ['o', 0],
      ['u', 0],
    ]);
    for (let char of str) {
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
      }
    }
    let values = [...map.values()].every((val) => val % 2 === 0);
    return values;
  };
  // squeezing out the largest substring from left and right
  for (let i = s.length - 1; i >= 0; i--) {
    let start = 0;
    let end = i;
    while (end < s.length) {
      const slice = s.slice(start, end + 1);
      if (evenVowelCheck(slice)) return end - start + 1;
      end++;
      start++;
    }
  }
};

//console.log(findLongestSubstring('eleetminicoworoep'));

const findKClosest = (arr, k, x) => {
  let xIndex = arr.findIndex((num) => num === x);
  if (xIndex === -1) {
    return arr.slice(0, k);
  }
  // from right to left
  let sorted = arr.sort((a, b) => Math.abs(a) - x - (Math.abs(b) - x));
  return sorted.slice(0, k);
};

// 1D array problem
const deleteAndEarn = (nums) => {
  const uglySolution = () => {
    let map = new Map();
    for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    nums = Array.from(new Set([...nums])).sort((a, b) => a - b);
    if (nums.length === 1) return nums[0] * map.get(nums[0]);
    let dp = new Array(nums.length).fill(0);
    dp[0] = map.get(nums[0]) * nums[0];
    dp[1] =
      nums[1] - 1 === nums[0]
        ? (dp[1] = Math.max(dp[0], map.get(nums[1]) * nums[1]))
        : (dp[1] = dp[0] + map.get(nums[1]) * nums[1]);

    for (let i = 2; i < nums.length; i++) {
      const currNum = nums[i];
      const prevNum = nums[i - 1];
      const currNumVal = currNum * map.get(currNum);
      if (currNum - 1 === prevNum) {
        dp[i] = Math.max(dp[i - 1], currNumVal + dp[i - 2]);
      } else {
        dp[i] = dp[i - 1] + currNumVal;
      }
    }
    return Math.max(...dp);
  };
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
