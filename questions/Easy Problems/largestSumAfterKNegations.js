const largestSumAfterKNegations = (nums, k) => {
  nums.sort((a, b) => a - b);
  let array = [];
  //   console.log(nums);
  for (let index = 0; index < nums.length; index++) {
    while (nums[index] === 0 && k > 0) {
      k--;
    }
    if (k === 0 || k < 0) break;
    if (nums[index] < 0) {
      array.push(Math.abs(nums[index]));
      k--;
    } else {
      if (nums[index] > 0) {
        if (k === 1) {
          array.push(-nums[index]);
          k -= 1;
        } else if (k > 1 && k % 2 === 1) {
          array.push(-nums[index]);
          k = 0;
        } else if (k % 2 === 0) {
          array.push(nums[index]);
          k = 0;
        }
      }
    }
  }
  //   console.log(array);
  array = [...array, ...nums.slice(array.length, nums.length)];
  return array.reduce((acc, current) => acc + current);
};

//console.log(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6));
