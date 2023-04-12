const deleteAndEarn = (nums) => {
  let map = new Map();
  if (nums.length === 1) return nums[0];
  for (let index in nums) {
    if (map.has(nums[index])) {
      map.set(nums[index], map.get(nums[index]) + nums[index]);
    } else {
      map.set(nums[index], nums[index]);
    }
  }
  if (map.size === 1) {
    return map.get(nums[0]);
  }
  let newArray = new Array(...new Set([...nums]));
  let dpArray = new Array(newArray.length).fill(0); // for the prefix sum
  newArray = [...newArray].sort((a, b) => a - b);
  // main iteration
  for (let index = 0; index < newArray.length; index++) {
    const totalNumValue = map.get(newArray[index]);
    if (index === 0) {
      dpArray[index] = totalNumValue;
    }
    if (index === 1) {
      if (newArray[index - 1] === newArray[index] - 1) {
        dpArray[index] = Math.max(dpArray[index - 1], totalNumValue);
      } else {
        dpArray[index] = dpArray[index - 1] + totalNumValue;
      }
    }
    if (index > 1) {
      if (newArray[index - 1] === newArray[index] - 1) {
        dpArray[index] = Math.max(
          dpArray[index - 1],
          dpArray[index - 2] + totalNumValue
        );
      } else {
        dpArray[index] = totalNumValue + dpArray[index - 1];
      }
    }
  }
  return Math.max(...dpArray);
};
// needs to delete the number less than one and plus one
//console.log(deleteAndEarn([1, 1, 1]));
