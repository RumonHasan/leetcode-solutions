const longestIncreasingSubsequence = (nums) => {
  let dpArray = new Array(nums.length).fill(1); // setting 1 by default to allow one substring
  for (let index = 0; index < nums.length; index++) {
    for (let secondIndex = 0; secondIndex < index; secondIndex++) {
      if (nums[secondIndex] >= nums[index]) {
        continue;
      }
      if (nums[secondIndex] < nums[index]) {
        dpArray[index] = Math.max(dpArray[secondIndex] + 1, dpArray[index]);
      }
    }
  }
  return Math.max(...dpArray);
};
// check up to the initial index
//console.log(longestIncreasingSubsequence([2, 5, 3, 7, 101]));
