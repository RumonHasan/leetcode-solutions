const minOperations1658 = (nums, x) => {
  console.log(nums);
  // edge case if all the elements are above x
  if (nums.every((singleNum) => singleNum > x)) {
    return -1;
  }
  // using sliding window approach in order to calculate min operations
  let endIndex = 0;
  let startIndex = 0;
  let sum = 0;
  while (endIndex < nums.length) {
    sum += nums[endIndex];

    endIndex++;
  }
};
// on hold
//console.log(minOperations1658([3, 2, 20, 1, 1, 3], 10));
