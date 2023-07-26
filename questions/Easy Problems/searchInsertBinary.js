const searchBinaryInsert = (nums, target) => {
  const generalBinaryApproach = () => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      const midIndex = Math.floor((start + end) / 2);
      if (nums[midIndex] === target) {
        return midIndex;
      }
      if (nums[midIndex] > target) {
        end = midIndex - 1;
      }
      if (nums[midIndex] < target) {
        start = midIndex + 1;
      }
    }
    // if the number is not present then return the start index
    return start;
  };
  // adjustments required... not correct
  const alternateBinaryApproachSlideMod = () => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      const midIndex = Math.floor((start + end) / 2);
      if (nums[midIndex] === target) {
        return midIndex;
      }
      if (end === start || end - start === 1) {
        if (nums[midIndex] < target) {
          return start + 1;
        } else {
          return start;
        }
      }
      if (nums[midIndex] > target) {
        end = midIndex - 1;
      }
      if (nums[midIndex] < target) {
        start = midIndex + 1;
      }
    }
  };
  //   console.log(alternateBinaryApproachSlideMod());
};
// if the number is not present look for the place where the start and end index are equal
// this is because when teh start and end are equal... the possible insertion point would be start + 1
// using binary search to return the index of 5
// console.log(searchBinaryInsert([1, 3], 0));
