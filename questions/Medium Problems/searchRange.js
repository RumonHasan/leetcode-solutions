const searchRange = (nums, target) => {
  console.log(nums);
  if (!nums.some((num) => num === target)) {
    return [-1, -1];
  }
  let output = [-1, -1];
  // left side binary
  const leftBias = () => {
    let right = nums.length - 1;
    let left = 0;
    while (left <= right) {
      let midIndex = Math.floor((left + right) / 2);
    }
  };
};
// using double binary search with right and left biasea in order to get the starting and ending indices
// console.log(searchRange([5, 7, 7, 8, 8, 8], 8));
