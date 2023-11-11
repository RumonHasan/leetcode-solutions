const numSubarrayProductLessThanK = (nums, k) => {
  console.log(nums);

  // brute force appraoch creating and checking all subarrays
  const bruteForce = () => {
    let counter = 0;
    for (let index = 0; index < nums.length; index++) {
      let subProd = 1;
      for (let subIndex = index; subIndex < nums.length; subIndex++) {
        subProd *= nums[subIndex];
        if (subProd < k) {
          counter++;
        }
      }
    }
    return counter;
  };

  // console.log(bruteForce());
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
