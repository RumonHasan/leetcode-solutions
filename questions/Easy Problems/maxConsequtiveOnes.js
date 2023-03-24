const maxConOnes = (nums) => {
  let oneCount = 0;
  let maxOneCount = 0;
  for (let index in nums) {
    if (Number(index) === nums.length - 1) {
      if (nums[index] === 1) {
        oneCount++;
      }
      maxOneCount = Math.max(maxOneCount, oneCount);
    }
    if (nums[index] === 1) {
      oneCount++;
    }
    if (nums[index] === 0) {
      maxOneCount = Math.max(maxOneCount, oneCount);
      oneCount = 0;
    }
  }

  return maxOneCount;
};

//console.log(maxConOnes([1, 1, 0, 1, 1, 1]));
