const findLonely = (nums) => {
  const intuitiveApproach = () => {
    let map = new Map();
    for (let index in nums) {
      const number = nums[index];
      map.has(number)
        ? map.set(number, map.get(number) + 1)
        : map.set(number, 1);
    }
    let collection = [];
    for (let index = 0; index < nums.length; index++) {
      if (map.get(nums[index]) === 1) {
        if (map.has(nums[index] + 1) || map.has(nums[index] - 1)) {
          continue;
        }
        collection.push(nums[index]);
      }
    }
    return collection;
  };
  console.log(intuitiveApproach());
};

//console.log(findLonely([62, 35, 59, 55, 84, 61, 38, 87, 55, 82]));
