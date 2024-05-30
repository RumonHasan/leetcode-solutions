const findShortestSubarray = (nums) => {
  console.log(nums);
  let locator = new Map();
  for (let numIndex in nums) {
    if (!locator.has(nums[numIndex])) {
      locator.set(nums[numIndex], [Number(numIndex), Number(numIndex), 1]);
    } else {
      locator.get(nums[numIndex])[1] = Number(numIndex);
      locator.get(nums[numIndex])[2] += 1;
    }
  }
  // updating based on the max number of occurence in hte map and collecting in the max len
  let localOc = 0;
  let minLen = Infinity;
  for (let [_, value] of locator) {
    const currLen = value[1] - value[0] + 1;
    const currOc = value[2];
    if (currOc >= localOc) {
      if (currOc === localOc) {
        minLen = Math.min(minLen, currLen);
      } else {
        minLen = currLen;
      }
      localOc = currOc;
    }
  }
  return minLen;
};

console.log(findShortestSubarray([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]));
