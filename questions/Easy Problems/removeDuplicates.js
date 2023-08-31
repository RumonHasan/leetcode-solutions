const removeDuplicates = (nums) => {
  let originalLength = nums.length;
  let numArray = [...new Set(nums)];
  let newLen = originalLength - numArray.length;
  for (let index = 0; index < newLen; index++) {
    numArray.push('_');
  }
  for (let index in numArray) {
    nums[index] = numArray[index];
  }
  console.log(nums);
};

console.log(removeDuplicates([1, 1, 2]));
