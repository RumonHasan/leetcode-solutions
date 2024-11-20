const sumOdd = (nums) => {
  let sum = 0;
  // brute force approach
  for (let i = 0; i < nums.length; i++) {
    for (j = i; j < nums.length; j++) {
      const subArray = nums.slice(i, j + 1);
      if (subArray.length % 2 === 1) {
        sum += subArray.reduce((a, b) => a + b, 0);
      }
    }
  }
  return sum;
};

// sum odd lengths
//console.log(sumOdd([1, 4, 2, 5, 3]));

const minFlips = (target) => {
  // brute force
  const bruteForce = () => {
    let counter = 0;
    let arr = target.split('').map((item) => Number(item));
    let dp = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== dp[i]) {
        if (arr[i] === 0) {
          for (let j = i; j < dp.length; j++) {
            dp[j] = 0;
          }
        } else if (arr[i] === 1) {
          for (let j = i; j < dp.length; j++) {
            dp[j] = 1;
          }
        }
        counter++;
      }
    }
    return counter;
  };
  // just traversing and checking throught target array instead of maintaining an alternate suffix arrray
  const optimized = () => {
    let counter = 0;
    let arr = target.split('').map((item) => Number(item));
    let start = 0; // starting index to check from 1
    for (let i in target) {
      // because initial 0s need not be checked
      if (arr[i] === 1) {
        start = Number(i);
        break;
      }
    }
    // edge case for when all target is 0
    if (arr.every((item) => item === 0)) return 0;
    let end = start;
    while (end < arr.length) {
      if (arr[end] === 1) {
        while (end < arr.length && arr[end] === 1) {
          end++;
        }
        counter++;
      } else {
        while (end < arr.length && arr[end] === 0) {
          end++;
        }
        counter++;
      }
    }

    return counter;
  };

  //console.log(optimized()); // focusing only on the target array
};

console.log(minFlips('10111'));

// getting the chars in the center rather than taking from both sides
const takeCharsFromLeftToRight = (s, k) => {
  let map = new Map();
  if (k === 0) return 0;
  if (s.length < 3) return -1;
  for (let char of s) {
    if (char === 'a' || char === 'b' || char === 'c') {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }
  if (map.size < 3) return -1;
  // subtracting the values till the limit
  for (let [key, _] of map) {
    map.set(key, map.get(key) - k);
    if (map.get(key) < 0) return -1;
  }
  let counterMap = new Map();
  let end = 0;
  let start = 0;
  let maxLen = 0;

  // remember that the counter map can have max of main map frequency
  while (end < s.length) {
    counterMap.set(s[end], (counterMap.get(s[end]) || 0) + 1);
    while (map.get(s[end]) < counterMap.get(s[end])) {
      counterMap.set(s[start], counterMap.get(s[start]) - 1);
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return s.length - maxLen;
};

//console.log(takeCharsFromLeftToRight('aabaaaacaabc', 2));
