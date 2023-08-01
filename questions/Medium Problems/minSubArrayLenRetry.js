const minSubArrayLenRetry = (target, nums) => {
  let minimumSize = Infinity;
  let endIndex = 0;
  let startIndex = 0;
  let total = 0;
  while (endIndex < nums.length) {
    total += nums[endIndex];
    while (total >= target) {
      minimumSize = Math.min(minimumSize, endIndex - startIndex + 1);
      total -= nums[startIndex];
      startIndex++;
    }
    endIndex++;
  }
  return minimumSize === Infinity ? 0 : minimumSize;
};

// returning min len whose sum is greater than or equal to target
//console.log(minSubArrayLenRetry(7, [2, 3, 1, 2, 4, 3]));
