const dominantIndex = (nums) => {
  let maxNum = Math.max(...nums);
  let index = 0;
  for (let indexNum in nums) {
    if (nums[indexNum] === maxNum) {
      index = Number(indexNum);
    }
  }
  let check = true;
  for (let indexNum in nums) {
    if (nums[indexNum] !== maxNum && !(nums[indexNum] * 2 <= maxNum)) {
      check = false;
      break;
    }
  }
  if (check) {
    return index;
  } else {
    return -1;
  }
};

//console.log(dominantIndex([3, 6, 1, 0]));
