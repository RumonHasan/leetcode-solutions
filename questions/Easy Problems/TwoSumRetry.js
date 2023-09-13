const twoSumRetry = (nums, target) => {
  //   let map = new Map();
  //   for (let index = 0; index < nums.length; index++) {
  //     const difference = target - nums[index];
  //     if (map.has(difference)) {
  //       map.get(difference).push(index);
  //       if (map.get(difference).length > 1) {
  //         return map.get(difference);
  //       }
  //     } else {
  //       map.set(nums[index], [index]);
  //     }
  //   }

  const differentApproach = () => {
    let hash = {};
    for (let index in nums) {
      if (hash[target - nums[index]]) {
        hash[target - nums[index]].push(Number(index));
        if (hash[target - nums[index]].length > 1) {
          return hash[target - nums[index]];
        }
      } else {
        hash[nums[index]] = [Number(index)];
      }
    }
    console.log(hash);
  };
  console.log(differentApproach());
};

console.log(twoSumRetry([2, 7, 11, 15], 9));
