const minOperations = (nums, x) => {
  const intuitiveAlgebraicApproach = () => {
    let arrayTotal = nums.reduce((acc, curr) => acc + curr);
    if (arrayTotal < x) return -1;
    let extraLen = arrayTotal - x;
    let end = 0;
    let start = 0;
    let minLength = Infinity;
    let localSum = 0;
    while (end < nums.length) {
      localSum += nums[end];
      while (localSum > extraLen) {
        localSum -= nums[start];
        start++;
      }
      if (localSum === extraLen) {
        const currLength = end - start + 1;
        const remainingLen = nums.length - currLength;
        minLength = Math.min(minLength, remainingLen);
      }
      end++;
    }
    return minLength === Infinity ? -1 : minLength;
  };
};

//console.log(minOperations([1, 1], 3));
