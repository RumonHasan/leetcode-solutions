const numOfPairs = (nums, target) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const checkStr = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const sub = nums[j];
        if (checkStr + sub === target) {
          counter++;
        }
      }
    }
  }
  return counter;
};

// checking how many pairs equal to target; need to find the suffix in order to check
//console.log(numOfPairs(['74', '1', '67', '1', '74'], '174'));
