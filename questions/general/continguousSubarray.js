const contiguousSubarray = (nums) => {
  let map = new Map();
  let zeroCounter = 0;
  let oneCounter = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum === 0) {
      zeroCounter++;
    } else {
      oneCounter++;
    }
    const currDiff = oneCounter - zeroCounter;
    if (map.has(currDiff)) {
      maxLen = Math.max(i - map.get(currDiff), maxLen);
    } else {
      map.set(currDiff, i);
    }
    // special case
    if (zeroCounter === oneCounter) {
      maxLen = Math.max(maxLen, zeroCounter + oneCounter);
    }
  }
  return maxLen;
};

//console.log(contiguousSubarray([1, 1, 0, 0]));
