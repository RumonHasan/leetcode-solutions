const findMiddleIndex = (nums) => {
  const optimizedLinearApproach = () => {
    // edge cases
    if (nums.length === 1) {
      return 0;
    }
    // dp approach
    let leftDp = new Array(nums.length).fill(0);
    let rightDp = new Array(nums.length).fill(0);
    // creating prefix and suffix sum
    let left = 0;
    while (left < nums.length) {
      if (left === 0) {
        leftDp[left] = 0;
      } else {
        leftDp[left] = leftDp[left - 1] + nums[left - 1];
      }
      left++;
    }
    // populating right dp using reverse order
    let right = nums.length - 1;
    while (right >= 0) {
      if (right === nums.length - 1) {
        rightDp[right] = 0;
      } else {
        rightDp[right] = rightDp[right + 1] + nums[right + 1];
      }
      right--;
    }
    // check prefix for equality
    let index = 0;
    while (index < rightDp.length) {
      if (rightDp[index] === leftDp[index]) {
        return index;
      }
      index++;
    }
    return -1;
  };
  // using slice and reduce
  const bruteForceAproach = () => {
    const arrayTotal = (array) => {
      return array.reduce((acc, current) => acc + current);
    };
    for (let index = 0; index < nums.length; index++) {
      let leftSliceTotal = index === 0 ? 0 : arrayTotal(nums.slice(0, index));
      let rightSliceTotal =
        index === nums.length - 1
          ? 0
          : arrayTotal(nums.slice(index + 1, nums.length));
      if (leftSliceTotal === rightSliceTotal) {
        return index;
      }
    }
    return -1;
  };

  //   console.log(bruteForceAproach());
};

//console.log(findMiddleIndex([-3, 0, 2, -3]));
