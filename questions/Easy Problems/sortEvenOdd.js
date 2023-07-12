const sortEvenOdd = (nums) => {
  let end = 0;
  let oddIndices = [];
  let evenIndices = [];
  const sortArray = (nums, type) =>
    type === 'odd' ? nums.sort((a, b) => b - a) : nums.sort((a, b) => a - b);
  while (end < nums.length) {
    if (end % 2 === 1) {
      oddIndices.push(nums[end]);
    } else {
      evenIndices.push(nums[end]);
    }
    end++;
  }
  sortArray(oddIndices, 'odd');
  sortArray(evenIndices, 'even');
  let evenIndex = 0;
  let oddIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index % 2 === 1) {
      nums[index] = oddIndices[oddIndex];
      oddIndex++;
    } else {
      nums[index] = evenIndices[evenIndex];
      evenIndex++;
    }
  }
  return nums;
};

// console.log(sortEvenOdd([4, 1, 2, 3, 5]));
