const subarrayRanges = (nums) => {
  // time limit exceeded
  const bruteForceApproach = () => {
    let end = 0;
    let total = 0;
    while (end < nums.length) {
      for (let index = end; index < nums.length; index++) {
        const subarray = nums.slice(end, index + 1);
        const difference = Math.max(...subarray) - Math.min(...subarray);
        total += difference;
      }
      end++;
    }
    return total;
  };
  // instead taking the whole array just getting the max and min per iteration which saves the memory cost and increases run time
  const acceptableOptimizedApproach = () => {
    let endIndex = 0;
    let total = 0;
    while (endIndex < nums.length) {
      let minmum = nums[endIndex];
      let maximum = nums[endIndex];
      for (let index = endIndex; index < nums.length; index++) {
        minmum = Math.min(minmum, nums[index]);
        maximum = Math.max(maximum, nums[index]);
        total += maximum - minmum;
      }
      endIndex++;
    }
    return total;
  };

  //   console.log(acceptableOptimizedApproach());
};

// console.log(subarrayRanges([1, 2, 3]));
