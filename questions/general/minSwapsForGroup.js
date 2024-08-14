const minSwaps = (nums) => {
  let totalOneCount = 0;
  for (let num of nums) {
    if (num === 1) {
      totalOneCount++;
    }
  }
  let minSwapCount = Infinity;
  let newArray = [...nums, ...nums];
  // check for one count in the sliding window
  let localOneCount = 0;
  for (let i = 0; i < totalOneCount; i++) {
    if (newArray[i] === 1) {
      localOneCount++;
    }
  }
  minSwapCount = totalOneCount - localOneCount;
  let end = totalOneCount;
  while (end < newArray.length) {
    const currNum = newArray[end];
    if (currNum === 1) {
      localOneCount++;
    }
    if (newArray[end - totalOneCount] === 1) {
      localOneCount--;
    }
    minSwapCount = Math.min(minSwapCount, totalOneCount - localOneCount);
    end++;
  }
  return minSwapCount;
};

//console.log(minSwaps([1, 1, 0, 0, 1]));
