const numberOfArraysWithMaxBound = (nums, left, right) => {
  let subcount = 0;

  const subChecker = (bound) => {
    let count = 0;
    let end = 0;
    let start = 0;
    while (end < nums.length) {
      const currNum = nums[end];
      if (currNum > bound) {
        start = end + 1;
      } else if (currNum <= bound) {
        count += end - start + 1;
      }
      end++;
    }
    return count;
  };

  const rightBound = subChecker(right);
  const leftBound = subChecker(left - 1); // checking till the left bound for deductions
  return (subcount = rightBound - leftBound);
};

// goal is to find the max bound of elements within the right and left upper limit
//note keep in mind that the subarray calculation will be divided between two points separated by the right limit
console.log(numberOfArraysWithMaxBound([2, 9, 2, 5, 6], 2, 8));
