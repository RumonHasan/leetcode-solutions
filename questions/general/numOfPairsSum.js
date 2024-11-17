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
