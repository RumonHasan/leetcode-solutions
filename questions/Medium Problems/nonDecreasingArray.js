const nonDecreasingArray = (nums) => {
  let checkOne = false;
  for (let index = 0; index < nums.length; index++) {
    const currentNum = nums[index];
    const nextNum = nums[index + 1];
    const prevNum = nums[index - 1];
    if (!checkOne && nextNum < currentNum) {
      if (nums[index + 2] > nums[index]) {
        continue;
      } else {
        nums[index] = nextNum - 1;
        checkOne = true;
      }
    } else if (nextNum >= currentNum) {
      if (prevNum > currentNum) {
        nums[index] = nextNum;
      } else {
        continue;
      }
    }
  }
  for (let index = 0; index < nums.length; index++) {
    if (nums[index + 1] < nums[index]) {
      return false;
    }
  }
  return true;
};

// note:: u can only change at most one time
//console.log(nonDecreasingArray([5, 7, 1, 8]));
