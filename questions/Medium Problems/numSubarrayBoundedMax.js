const numSubarrayBoundedMax = (nums, left, right) => {
  // using for loop
  let startIndex = -1;
  let endIndex = -1;
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      endIndex = i;
    } else if (nums[i] > right) {
      endIndex = i;
      startIndex = i;
    }
    // check index
    length += Math.abs(endIndex - startIndex);
  }
  return length;
};
// possible outputs: [2] , [2, 1], [3] range are inclusive
//console.log(numSubarrayBoundedMax([0, 9, 2, 5, 6], 2, 8));
