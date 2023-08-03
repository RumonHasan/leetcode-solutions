const checkSubarraySum = (nums, k) => {
  //   console.log(nums);
  let map = new Map([[0, -1]]);
  let total = 0;
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    total += num;
    const remainder = total % k;
    if (!map.has(remainder)) {
      map.set(remainder, index);
    }
    if (index - map.get(remainder) > 1) {
      return true;
    }
  }
  return false;
};
// using hash maps to store remainder and index in order to check the remainder
//console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
