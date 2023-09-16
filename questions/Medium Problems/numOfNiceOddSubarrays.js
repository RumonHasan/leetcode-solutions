const numberOfSubarrays = (nums, k) => {
  const basicIntuitiveApproach = () => {
    let numArray = [];
    for (let index in nums) {
      if (nums[index] % 2 === 0) {
        numArray.push(0);
      } else {
        numArray.push(1);
      }
    }
    let oddCount = 0;
    let end = 0;
    let start = 0;
    let localCount = 0;
    let maxCount = 0;
    while (end < numArray.length) {
      if (numArray[end] === 1) {
        oddCount++;
        localCount = 0; // restart local count when we find new odd
      }
      // keep closing window when it hits equal to k
      while (oddCount === k) {
        localCount++;
        if (numArray[start] === 1) {
          oddCount--;
        }
        start++;
      }
      maxCount += localCount;
      end++;
    }
    return maxCount;
  };
  // basically the approach is using prefix count of the local sum of subarrays
};

// with atleaast k odd numbers
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
