const createTargetArray = (nums, index) => {
  // console.log(nums, index);
  let targetArray = [];
  // need to be understood
  for (let i = 0; i < nums.length; i++) {
    targetArray.splice([index[i]], 0, nums[i]);
    console.log(targetArray, [index[i]]);
  }
  return targetArray;
};

// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
