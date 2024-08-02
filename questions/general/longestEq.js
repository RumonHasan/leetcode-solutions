const longestEq = (nums, k) => {
  let map = new Map();
  let index = 0;
  let start = 0;
  let maxLength = 0;
  let maxFreq = 0;
  while (index < nums.length) {
    map.set(nums[index], (map.get(nums[index]) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(nums[index])); // always keeps the latest max freq up to date
    while (index - start + 1 - Math.max(...map.values()) > k) {
      // reducing the start occurence from the back
      if (map.has(nums[start])) {
        map.set(nums[start], map.get(nums[start]) - 1);
        if (map.get(nums[start]) === 0) {
          map.delete(nums[start]);
        }
      }
      start++;
    }
    maxLength = Math.max(maxFreq, maxLength);
    index++;
  }
  return maxLength;
};

// finding the longest equal subarray after deleting at most k numbers from the entire array
//console.log(longestEq([1, 3, 2, 3, 1, 3], 3));
