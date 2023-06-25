const twoSum = (nums, target) => {
  // brute force approach
  const bruteForce = (localNums) => {
    let end = 0;
    while (end < localNums.length) {
      let subEnd = end + 1;
      while (subEnd < localNums.length) {
        const total = localNums[end] + localNums[subEnd];
        if (total === target) {
          return [end, subEnd];
        }
        subEnd++;
      }
      end++;
    }
  };
  // the same can be achieved with hash approach
  //optimized approach using maps to store the compliment of the number after subtraction
  const optimizedApproach = (nums) => {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
      const compliment = target - nums[index];
      if (map.has(nums[index])) {
        return [map.get(nums[index]), index];
      } else {
        map.set(compliment, index);
      }
    }
  };
  //   console.log(optimizedApproach(nums));
};

//console.log(twoSum([2, 7, 11, 15], 9));
