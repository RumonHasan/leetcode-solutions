const arithmeticSlices = (nums) => {
  let totalCount = 0; // note: each slice has a minimum length of three
  let sliceCounter = 2; // initial should be 2 since min length is 3

  for (let index = 2; index < nums.length; index++) {
    const checkDiff =
      nums[index] - nums[index - 1] === nums[index - 1] - nums[index - 2];
    if (checkDiff) {
      sliceCounter++;
      // getting the final count by offsetting with 2
      totalCount += sliceCounter - 2;
    } else {
      sliceCounter = 2; // if no slice is found then just initialise it to two
    }
  }

  return totalCount;
};

console.log(arithmeticSlices([1, 2, 3, 4]));
