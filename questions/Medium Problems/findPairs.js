const findPairs = (nums, k) => {
  let hash = {};
  let secondHash = {};
  for (let index in nums) {
    secondHash[nums[index]]
      ? secondHash[nums[index]]++
      : (secondHash[nums[index]] = 1);
  }
  // checking for pair availability
  let setNums = new Array(...new Set([...nums]));
  nums = setNums;
  for (let index in nums) {
    hash[nums[index]] = nums[index];
  }
  let pairCount = 0;
  if (k === 0) {
    for (const [_, value] of Object.entries(secondHash)) {
      if (value >= 2) {
        pairCount++;
      }
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      const pairSum = nums[i] + k;
      if (pairSum === 0 && nums.includes(0)) {
        pairCount++;
      }
      if (hash[pairSum]) {
        pairCount++;
      }
    }
  }
  return pairCount;
};

//console.log(findPairs([-1, 0, 0, 1, 0, 0, -1], 1));
