const houseRobber = (nums) => {
  let dpArray = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dpArray[i] = nums[i];
    }
    if (i === 1) {
      dpArray[i] = Math.max(dpArray[i - 1], nums[i]);
    }
    if (i > 1) {
      let maxCheck = Math.max(dpArray[i - 2] + nums[i], dpArray[i - 1]);
      dpArray[i] = maxCheck;
    }
  }
  return dpArray[dpArray.length - 1];
};

//console.log(houseRobber([2, 7, 9, 3, 1]));
