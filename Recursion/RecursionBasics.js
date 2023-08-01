// simple straightforward and backward approaches for recursion
const recursiveBackIteration = (nums, type) => {
  // conditional based recursive front and back
  const recursiveIterationFrontAndBack = (arr, index, type) => {
    if (type === 'front' ? index > nums.length - 1 : index < 0) {
      return arr;
    }
    arr.push(nums[index]);
    return recursiveIterationFrontAndBack(
      arr,
      type === 'front' ? index + 1 : index - 1,
      type
    );
  };
  let result = recursiveIterationFrontAndBack(
    [],
    type === 'front' ? 0 : nums.length - 1,
    type
  );
  return result;
};

//console.log(recursiveBackIteration([1, 2, 3, 4, 5], 'back'));
