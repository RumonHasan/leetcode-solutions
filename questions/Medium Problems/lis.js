const lengthOfLIS = (nums) => {
  const cuteApproach = () => {
    let dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
      const limit = nums[i];
      for (let j = 0; j < i; j++) {
        const numCheck = nums[j];
        if (limit > numCheck) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    return Math.max(...dp);
  };
};

//console.log(lengthOfLIS([2, 10, 3, 7, 101, 18]));

/* 
    [1, 1, 1, 1]
    1 , 2, 
*/
const countPairs = (nums, k) => {
  let counter = 0;
  for (let index = 0; index < nums.length; index++) {
    const main = nums[index];
    for (let subIndex = index + 1; subIndex < nums.length; subIndex++) {
      const second = nums[subIndex];
      const difference = Math.abs(second - main);
      if (difference === k) counter++;
    }
  }
  return counter;
};

// find k difference pairs
// const findPairs = (nums, k) => {
//   console.log(nums);
// };

// console.log(findPairs([1, 2, 3, 4, 5], 1));

const maxOperations = (nums, k) => {
  nums.sort((a, b) => b - a);
  if (k === 1) return 0;
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const difference = Math.abs(number - k);
    if (difference === number && map.get(difference) < 2) {
      continue;
    }
    // conditions to check whether they add up to the
    if (
      map.get(number) > 0 &&
      map.get(difference) > 0 &&
      number + difference === k
    ) {
      map.set(number, map.get(number) - 1);
      map.set(difference, map.get(difference) - 1);
      map.get(number) <= 0 && map.delete(number);
      map.get(difference) <= 0 && map.delete(difference);
      counter++;
    }
  }
  return counter;
};

//console.log(maxOperations([3, 5, 1, 5], 2));

// using formula or it can be done with incremental updates
const zeroFillerSubarrays = (nums) => {
  let counter = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      let localCounter = 0;
      while (index < nums.length && nums[index] === 0) {
        localCounter++;
        index++;
      }
      let localLength = (localCounter * (localCounter + 1)) / 2;
      counter += localLength;
    }
  }
  return counter;
};

//console.log(zeroFillerSubarrays([1, 3, 0, 0, 2, 0, 0, 4]));
