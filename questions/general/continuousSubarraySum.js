const continuousSubarraySum = (nums, k) => {
  let prefMap = new Map();
  prefMap.set(0, -1); // incase the single element is divisble by k
  // main iteration to check whether the remainder is present or not in the map
  let prefSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const currIndex = i;
    prefSum += currNum;
    const modVal = prefSum % k;

    // adding remainder as key and index as val to map
    if (prefMap.has(modVal)) {
      // if it exists then check
      const size = Math.abs(prefMap.get(modVal) - currIndex);
      if (size >= 2) {
        return true;
      }
    } else {
      prefMap.set(modVal, currIndex); // setting it if mod does not exist
    }
  }
  return false;
};

console.log(continuousSubarraySum([23, 2, 6, 4, 7], 6));

// min operations for nums and x
const minOperations = (nums, x) => {
  let prefixSum = 0;
  let end = 0;
  let start = 0;
  while (end < nums.length) {
    end++;
  }
};

console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
