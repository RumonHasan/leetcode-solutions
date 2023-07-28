const maxCircularSubarray = (nums) => {
  console.log(nums);

  // egde case for all negative numbers
  const check = nums.every((num) => num < 0);
  if (check) {
    return Math.max(...nums);
  }
  // for mixed numbers
  let globalMinDp = new Array(nums.length).fill(Infinity);
  let globalMaxDp = new Array(nums.length).fill(0);
  for (let index = 0; index < nums.length; index++) {
    if (index === 0) {
      globalMinDp[index] = nums[index];
      globalMaxDp[index] = nums[index];
    }
    if (index > 0) {
      //global max
      let localGlobal = globalMaxDp[index - 1] + nums[index];
      let currentGlobal = nums[index];
      globalMaxDp[index] = Math.max(localGlobal, currentGlobal);
      //global min
      let localMinGlobal = globalMinDp[index - 1] + nums[index];
      globalMinDp[index] = Math.min(localMinGlobal, nums[index]);
    }
  }
  let finalGlobalMin = Math.min(...globalMinDp);
  let finalGlobalMax = Math.max(...globalMaxDp);
  let total = nums.reduce((acc, curr) => acc + curr);
  let finalMax = total - finalGlobalMin;
  if (finalMax > finalGlobalMax) {
    return finalMax;
  } else {
    return finalGlobalMax;
  }
};

// dynamic programming approach
console.log(maxCircularSubarray([-5, -3, -2, -5]));
