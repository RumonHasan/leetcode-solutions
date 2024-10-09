const longestSubDifference = (arr, difference) => {
  let map = new Map();
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const compliment = curr - difference;
    let currLen = 0;
    // if the compliment is present then increase the existing length of the number
    if (map.has(compliment)) {
      currLen = map.get(compliment) + 1;
    } else {
      currLen = 1;
    }
    // setting the currlen
    map.set(curr, currLen);
    max = Math.max(max, currLen);
  }
  return max;
};

//console.log(longestSubDifference([1, 5, 7, 8, 5, 3, 4, 2, 1], -2));

// primary formula: num + 2 *Space
const destroySequentialTargets = (nums, space) => {
  nums.sort((a, b) => a - b);
  let map = new Map();
  let maxMod = 0;
  // storing the remainders
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const mod = currNum % space;
    // updating the remainder map;
    if (map.has(mod)) {
      map.set(mod, map.get(mod) + 1);
    } else {
      map.set(mod, 1);
    }
    maxMod = Math.max(maxMod, map.get(mod));
  }
  for (let num of nums) {
    if (map.get(num % space) === maxMod) {
      return num;
    }
  }
};

//console.log(destroySequentialTargets([6, 2, 5], 100));
