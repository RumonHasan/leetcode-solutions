const singleNumber = (nums) => {
  let map = new Map();
  for (let index in nums) {
    map.has(nums[index])
      ? map.set(nums[index], map.get(nums[index]) + 1)
      : map.set(nums[index], 1);
  }
  let result = [];
  map.forEach((value, key) => value === 1 && result.push(key));
  return result;
};

//console.log(singleNumber([1, 2, 1, 3, 2, 5]));
