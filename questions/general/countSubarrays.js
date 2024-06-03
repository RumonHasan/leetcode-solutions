const countSubarrays = (nums, k) => {
  //console.log(nums);
  let max = Math.max(...nums);
  let maxCounter = 0;
  let end = 0;
  let start = 0;
  let subCount = 0;
  while (end < nums.length) {
    const currNum = nums[end];
    if (currNum === max) {
      maxCounter++;
    }
    while (maxCounter >= k) {
      if (nums[start] === max) {
        maxCounter--;
      }
      start++;
    }
    const initialStart = start - 1;
    if (initialStart >= 0) {
      subCount += initialStart + 1;
    }
    end++;
  }

  return subCount;
};

//console.log(countSubarrays([1, 3, 2, 3, 3], 2));
