const numOfPairs = (nums, target) => {
  const bruteForceApproach = () => {
    let end = 0;
    let counter = 0;
    while (end < nums.length) {
      const element = nums[end];
      for (let index = 0; index < nums.length; index++) {
        if (index === end) {
          continue;
        }
        const checkElement = nums[index];
        if (checkElement + element === target) counter++;
      }
      end++;
    }
    return counter;
  };

  // slightly more optimized approach using startsWith
  const optimizedApproach = () => {
    let counter = 0;
    let end = 0;
    while (end < nums.length) {
      const element = nums[end];
      const targetCheck = target.startsWith(element);
      if (targetCheck) {
        for (let index = 0; index < nums.length; index++) {
          if (index !== end) {
            if (element + nums[index] === target) {
              counter++;
            }
          }
        }
      }
      end++;
    }
    return counter;
  };
};
// thinking process:
// main approach for this question has to be brute force appraoch since there are reverse order index pairs
// use brute force and js in built methods in order to check
//console.log(numOfPairs(['777', '7', '77', '77'], '7777'));
