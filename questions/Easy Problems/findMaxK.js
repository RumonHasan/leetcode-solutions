const findMaxK = (nums) => {
  let negativeSigns = [];
  let positiveSigns = [];
  for (let index in nums) {
    if (Math.sign(nums[index]) === -1) {
      negativeSigns.push(nums[index]);
    }
    if (Math.sign(nums[index]) === 1) {
      positiveSigns.push(nums[index]);
    }
  }
  // check for availability
  let checkArray = [];
  for (let i = 0; i < negativeSigns.length; i++) {
    if (positiveSigns.includes(Math.abs(negativeSigns[i]))) {
      checkArray.push(negativeSigns[i]);
    }
  }
  let finalArray = [];
  for (let index in checkArray) {
    finalArray.push(Math.abs(checkArray[index]));
  }
  return Math.max(...finalArray) === -Infinity ? -1 : Math.max(...finalArray);
};

//console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
