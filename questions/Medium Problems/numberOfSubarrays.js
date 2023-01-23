const numberOfSubarrays = (nums, k) => {
  const newDp = new Array(nums.length).fill(0);
  for (let index in nums) {
    if (nums[index] % 2 === 0) {
      newDp[index] = 0;
    } else {
      newDp[index] = 1;
    }
  }
  let subArrayCount = 0;
  let singleIterationCount = 0;
  let startIndex = 0;
  const dpLength = newDp.length;
  let limit = k;
  // main iteration
  for (let i = 0; i < dpLength; i++) {
    if (newDp[i] === 1) {
      limit--;
      singleIterationCount = 0;
    }
    // after the first series is calculated the second series of the number will also have same amount of subarray
    while (limit === 0) {
      //   const slice = newDp.slice(startIndex, i + 1);
      limit += newDp[startIndex];
      startIndex++;
      singleIterationCount++;
    }
    subArrayCount += singleIterationCount;
  }

  return subArrayCount;
};
// getting the number of subarrays with odd  k values
// convert them to 0s and 1s then filter out the array

//console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
