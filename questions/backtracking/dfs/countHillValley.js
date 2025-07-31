const countHillValley = (nums) => {
  // base case
  if (nums.length < 3) return 0; // if the length is below three there can be no hill and valley formed
  let count = 0;
  let prevIndex = 0;
  let currIndex = 1;
  // checking initial possible consequtive sequences
  while (currIndex < nums.length && nums[prevIndex] === nums[currIndex]) {
    currIndex++;
  }

  // main iteration for checking other possible hills and valleys for iteration
  while (currIndex < nums.length) {
    // skipping the next index for consequtive elements
    let nextIndex = currIndex + 1;
    while (nextIndex < nums.length && nums[currIndex] === nums[nextIndex]) {
      nextIndex++;
    }
    // main checking condition
    if (nextIndex < nums.length) {
      if (
        (nums[prevIndex] < nums[currIndex] &&
          nums[nextIndex] < nums[currIndex]) ||
        (nums[prevIndex] > nums[currIndex] && nums[nextIndex] > nums[currIndex])
      ) {
        count++;
      }
    }
    // updating indices first prev index to the curr then the curr to next
    prevIndex = currIndex;
    currIndex = nextIndex;
  }
  // final count returned with the total number of hills and valleys
  return count;
};

/* getting the count of hills and valleys from the current index to the neighboring indices
    using O(n) approach where only iterating once and keeping track of the next and current value
*/
console.log(countHillValley([2, 4, 1, 1, 6, 5]));
