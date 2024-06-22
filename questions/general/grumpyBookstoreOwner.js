const grumpyBookStoreOwner = (customers, grumpy, minutes) => {
  let totalSatisfaction = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      totalSatisfaction += customers[i];
    }
  }
  // sliding window using minutes
  let currSatisfaction = 0;
  let currMaxSatisfaction = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      currSatisfaction += customers[i];
    }
  }
  currMaxSatisfaction = currSatisfaction;
  let end = minutes;
  let start = 0;
  while (end < customers.length) {
    if (grumpy[start] === 1) {
      currSatisfaction -= customers[start];
    }
    if (grumpy[end] === 1) {
      currSatisfaction += customers[end];
    }
    currMaxSatisfaction = Math.max(currMaxSatisfaction, currSatisfaction);
    start++;
    end++;
  }
  return totalSatisfaction + currMaxSatisfaction;
};

// sliding window approach
// console.log(
//   grumpyBookStoreOwner([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
// );

/*
    [1, 0, 1, 2, 1, 1, 7, 5], 
    [0, 1, 0, 1, 0, 1, 0, 1]
*/

const minDifference = (nums, k) => {
  nums.sort((a, b) => b - a);
  let minDiff = Infinity;
  let total = nums[0] - nums[k - 1];
  minDiff = total;
  let start = 0;
  for (let i = k; i < nums.length; i++) {
    start++;
    minDiff = Math.min(minDiff, nums[start] - nums[i]);
  }
  return minDiff;
};

//console.log(minDifference([9, 4, 1, 7], 2));
