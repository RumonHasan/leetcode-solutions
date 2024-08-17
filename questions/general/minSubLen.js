const minSubLen = (target, nums) => {
  let end = 0;
  let start = 0;
  let total = 0;
  let maxLen = Infinity;
  while (end < nums.length) {
    const currNum = nums[end];
    total += currNum;
    while (total > target) {
      if (total >= target) {
        // checking if its bigger or equal then keep reducing and adding
        maxLen = Math.min(end - start + 1, maxLen);
      }
      total -= nums[start];
      start++;
    }
    // general condiiton
    if (total >= target) {
      maxLen = Math.min(end - start + 1, maxLen);
    }
    end++;
  }
  return maxLen;
};

//console.log(minSubLen(11, [1, 2, 3, 4, 5]));
