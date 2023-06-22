const numberOfArithmeticSlices = (nums) => {
  let sliceCount = 0;
  let subCount = 0;
  for (let index = 1; index < nums.length; index++) {
    const diffOne = nums[index] - nums[index - 1];
    const diffTwo = nums[index + 1] - nums[index];
    if (diffOne === diffTwo) {
      subCount++;
      // here sliceCount is the accumulated value hence it gives the last value
      sliceCount += subCount;
    } else {
      subCount = 0;
    }
  }
  return sliceCount;
};

//console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
