const minimumOperations = (nums) => {
  let suffixArray = new Array(nums.length).fill(0);
  let set = new Set();
  let operationCount = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    set.add(nums[i]);
    suffixArray[i] = set.size;
  }

  if (suffixArray[0] === nums.length) {
    return 0;
  }

  for (let i = 0; i < suffixArray.length; i += 3) {
    // starts from 0 as for the first suffix values
    const remainingLen = nums.length - i;
    const distinctInSuffix = suffixArray[i];
    if (remainingLen === distinctInSuffix) {
      // we only care if remaining len is equal
      return operationCount;
    }
    operationCount++;
  }

  return operationCount;
};

// suffix based distinct elements approach
console.log(minimumOperations([6, 7, 8, 9]));
