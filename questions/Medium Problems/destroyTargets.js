const destroyTargets = (nums, space) => {
  const intuitiveApproach = () => {
    nums.sort((a, b) => a - b);
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
      const number = nums[index];
      const remainder = number % space;
      map.has(remainder)
        ? map.set(remainder, map.get(remainder) + 1)
        : map.set(remainder, 1);
    }
    let maxRemainder = 0;
    let finalResult;
    for (let index in nums) {
      const number = nums[index] % space;
      if (map.get(number) > maxRemainder) {
        maxRemainder = map.get(number);
        finalResult = nums[index];
      }
    }
    return finalResult;
  };
};

//console.log(destroyTargets([3, 7, 8, 1, 1, 5], 2));
