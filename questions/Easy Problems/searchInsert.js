const searchInsert = (nums, target) => {
  if (nums.includes(target)) {
    for (let index in nums) {
      if (nums[index] === target) {
        return Number(index);
      }
    }
  } else {
    if (nums.length === 1) {
      if (nums[0] > target) {
        return 0;
      } else return 1;
    }
    let finalIndex = undefined;
    let rightIndex = undefined;
    let leftIndex = undefined;
    for (let index = 1; index < nums.length; index++) {
      if (target < nums[index - 1]) {
        return 0;
      }
      if (nums[index] > target && target > nums[index - 1]) {
        rightIndex = index;
        finalIndex = index;
        leftIndex = index - 1;
        break;
      }
    }
    if (rightIndex === undefined) {
      return nums.length;
    } else if (leftIndex === undefined) {
      return 0;
    } else {
      return finalIndex;
    }
  }

  const optimizedSolution = () => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  };
};

console.log(searchInsert([1], 0));
