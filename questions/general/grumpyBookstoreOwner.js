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
