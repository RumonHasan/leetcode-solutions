const firstPivotIndex = (nums) => {
  console.log(nums);
  let sumLeft = 0;
  let sumRight = 0;
  let pivotIndex = -1;
  let totalSum = nums.reduce((sum, curr) => sum + curr, 0);
  // reduce from the left side and increase from the right
  for (let index = 0; index < nums.length; index++) {
    sumRight = totalSum - sumLeft - nums[index];
    if (sumRight === sumLeft) {
      pivotIndex = index;
      break;
    }
    sumLeft += nums[index];
  }
  return pivotIndex;
};

//console.log(firstPivotIndex([1, 7, 3, 6, 5, 6]));
