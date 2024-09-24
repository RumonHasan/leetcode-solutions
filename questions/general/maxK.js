const maximumSub = (nums, k) => {
  let map = new Map();
  let total = 0;
  for (let i = 0; i < k; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    total += nums[i];
  }
  let max = map.size === k ? total : 0;
  let end = k;
  let start = 0;
  while (end < nums.length) {
    if (map.has(nums[start])) {
      map.set(nums[start], map.get(nums[start]) - 1);
      if (map.get(nums[start]) === 0) {
        map.delete(nums[start]);
      }
    }
    total -= nums[start];
    total += nums[end];
    map.set(nums[end], (map.get(nums[end]) || 0) + 1);
    // adding max
    if (map.size === k) {
      max = Math.max(max, total);
    }
    start++;
    end++;
  }
  return max;
};

//console.log(maximumSub([1, 5, 4, 2, 9, 9, 9], 3));
