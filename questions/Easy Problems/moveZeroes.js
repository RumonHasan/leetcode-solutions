const moveZeroes = (nums) => {
  let numbers = [];
  let dp = new Array(nums.length).fill('');
  for (let index in nums) {
    nums[index] !== 0 && numbers.push(nums[index]);
  }
  let numberIndex = 0;
  for (let index in dp) {
    if (numberIndex < numbers.length) {
      dp[index] = numbers[numberIndex];
      numberIndex++;
    } else {
      dp[index] = 0;
    }
  }
  for (let index in dp) {
    nums[index] = dp[index];
  }
  return nums;
};

//console.log(moveZeroes([0, 1, 0, 3, 12]));
