const subArraySum = (nums, k) => {
  let runningSum = 0;
  let map = new Map([[0, 1]]);
  let resultCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    runningSum += currNum;
    const modulus = Math.abs(runningSum % k);
    if (map.has(modulus)) {
      resultCount += map.get(modulus);
      map.set(modulus, map.get(modulus) + 1);
    } else {
      map.set(modulus, 1);
    }
    console.log(map);
  }
  return resultCount;
};

//console.log(subArraySum([-1, 2, 9], 2));
