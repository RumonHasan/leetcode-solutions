const findPrefixScore = (nums) => {
  const makeArray = (len) => new Array(len).fill(0);
  let prefDp = makeArray(nums.length);
  let result = makeArray(nums.length);
  let maxNum = 0;
  for (let i = 0; i < nums.length; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    prefDp[i] = nums[i] + maxNum;
    result[i] = i === 0 ? (result[i] = prefDp[i]) : result[i - 1] + prefDp[i];
  }
  return result;
};

//console.log(findPrefixScore([2, 3, 7, 5, 10]));
