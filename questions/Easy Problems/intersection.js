const intersection = (nums) => {
  let numsMap = new Map();
  let result = [];
  for (let index = 0; index < nums[0].length; index++) {
    if (numsMap.has(nums[0][index])) {
      numsMap.set(nums[0][index], numsMap.get(nums[0][index]) + 1);
    } else {
      numsMap.set(nums[0][index], 1);
    }
  }
  for (let index = 1; index < nums.length; index++) {
    for (let secondIndex = 0; secondIndex < nums[index].length; secondIndex++) {
      if (numsMap.has(nums[index][secondIndex])) {
        numsMap.set(
          nums[index][secondIndex],
          numsMap.get(nums[index][secondIndex]) + 1
        );
      }
    }
  }
  // checking equality
  for (let [key, value] of numsMap) {
    if (value === nums.length) {
      result.push(Number(key));
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
