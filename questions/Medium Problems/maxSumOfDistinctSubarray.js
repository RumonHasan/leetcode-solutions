const maximumSubarraySum = (nums, k) => {
  const intuitiveSlidingWindowApproach = () => {
    let maxSum = 0;
    let localTotal = 0;
    let map = new Map();
    for (let i = 0; i < k; i++) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
      localTotal += nums[i];
    }
    // using size instead since every element in map will have k elements that are distant
    const valCheck = (map) => {
      const check = map.size === k;
      return check;
    };
    maxSum = localTotal;
    if (!valCheck(map)) {
      maxSum = 0;
    }
    let end = k;
    let start = 0;
    while (end < nums.length) {
      map.set(nums[start], map.get(nums[start]) - 1);
      map.get(nums[start]) === 0 && map.delete(nums[start]);
      localTotal -= nums[start];
      localTotal += nums[end];
      if (map.has(nums[end])) {
        map.set(nums[end], map.get(nums[end]) + 1);
      } else {
        map.set(nums[end], 1);
      }
      if (valCheck(map)) {
        maxSum = Math.max(maxSum, localTotal);
      }
      start++;
      end++;
    }
    return maxSum;
  };
};

//console.log(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3));
