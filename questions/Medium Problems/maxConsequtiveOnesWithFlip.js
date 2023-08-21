const longestConsequtiveOnesWithKFlips = (nums, k) => {
  let endIndex = 0;
  let startIndex = 0;
  let maxOneCounter = 0;
  let kCounter = 0;
  while (endIndex < nums.length) {
    if (nums[endIndex] === 0) {
      kCounter++;
    }
    while (kCounter > k) {
      if (nums[startIndex] === 0) {
        kCounter--;
      }
      startIndex++;
    }
    maxOneCounter = Math.max(maxOneCounter, endIndex - startIndex + 1);
    endIndex++;
  }
  return maxOneCounter;
};

// console.log(
//   longestConsequtiveOnesWithKFlips([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)
// );
