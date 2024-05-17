const continuosSubarray = (nums) => {
  console.log(nums);
  // bute force solution
  // 2129/2135 passed
  const bruteForceTimelimitExceed = () => {
    let subCount = 0;
    for (let i = 0; i < nums.length; i++) {
      let min = Infinity;
      let max = -Infinity;
      for (let j = i; j < nums.length; j++) {
        const currNum = nums[j];
        if (currNum > max) {
          max = currNum;
        }
        if (currNum < min) {
          min = currNum;
        }
        const difference = Math.abs(max - min) <= 2;
        if (difference) subCount++;
      }
    }
    return subCount;
  };
};

console.log(continuosSubarray([5, 4, 2, 4]));
