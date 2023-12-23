// formulaic approach
const arithmeticSlices = (nums) => {
  const mathematicalApproach = () => {
    let counter = 0;
    if (nums.length < 3) return 0;
    for (let index = 0; index < nums.length; index++) {
      if (nums[index + 1] - nums[index] === nums[index + 2] - nums[index + 1]) {
        let start = index;
        while (
          nums[index + 1] - nums[index] ===
          nums[index + 2] - nums[index + 1]
        ) {
          index++;
        }
        let end = index + 1;
        let length = end - start + 1;
        // using formula
        const totalSubCount =
          (length * (length + 1)) / 2 - (length + (length - 1));
        counter += totalSubCount;
      }
    }
    return counter;
  };
};

//console.log(arithmeticSlices([1, 2, 3, 4, 7, 8, 9]));
