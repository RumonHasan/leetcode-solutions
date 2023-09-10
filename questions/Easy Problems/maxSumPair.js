const maxSum = (nums) => {
  const intuitiveApproach = () => {
    let end = 0;
    let maxSum = -1;
    const getMaxNumber = (num) => {
      return Math.max(
        ...num
          .toString()
          .split('')
          .map((singleNumber) => Number(singleNumber))
      );
    };
    while (end < nums.length) {
      for (let index = end + 1; index < nums.length; index++) {
        if (getMaxNumber(nums[end]) === getMaxNumber(nums[index])) {
          const total = nums[end] + nums[index];
          maxSum = Math.max(total, maxSum);
        }
      }
      end++;
    }
    return maxSum;
  };
};

//console.log(maxSum([51, 71, 17, 24, 42]));
