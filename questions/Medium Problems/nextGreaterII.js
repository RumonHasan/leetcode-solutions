const nextGreaterElements = (nums) => {
  let resultArray = new Array(nums.length).fill(-1);
  for (let index = 0; index < nums.length; index++) {
    const leftSlice = nums.slice(0, index);
    const rightSlice = nums.slice(index + 1, resultArray.length);
    const slice = [...rightSlice, ...leftSlice];
    let sliceIndex = 0;
    while (sliceIndex < slice.length) {
      if (slice[sliceIndex] > nums[index]) {
        resultArray[index] = slice[sliceIndex];
        break;
      }
      sliceIndex++;
    }
  }
  return resultArray;
};

//console.log(nextGreaterElements([1, 2, 3, 4, 3]));
