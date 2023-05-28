const thirdMax = (nums) => {
  if (nums.every((num) => num === nums[0])) {
    return nums[0];
  }
  if (nums.length < 3) {
    return Math.max(...nums);
  }
  let newNums = new Array(...new Set([...nums])).sort((a, b) => b - a);
  if (newNums.length < 3) {
    return Math.max(...newNums);
  }
  return newNums[2];
};
//console.log(thirdMax([1, 1, 1]));
