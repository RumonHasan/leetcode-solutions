const minDeletionsBoundary = (nums) => {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let midMaxIndex = 0;
  let midMinIndex = 0;
  // checking from the left
  let leftCounter = 0;
  let checkMax = false;
  let checkMin = false;
  // going from the left
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (checkMax && checkMin) break;
    if (currNum === max) {
      checkMax = true;
      midMaxIndex = i;
    }
    if (currNum === min) {
      checkMin = true;
      midMinIndex = i;
    }
    leftCounter++;
  }
  // checking from right
  let rightCounter = 0;
  checkMax = false;
  checkMin = false;
  for (let i = nums.length - 1; i >= 0; i--) {
    const currNum = nums[i];
    if (checkMax && checkMin) break;
    if (currNum === max) {
      checkMax = true;
    }
    if (currNum === min) {
      checkMin = true;
    }
    rightCounter++;
  }
  // checking from both sides
  let bothSides = 0;
  const smallerIdx = Math.min(midMaxIndex, midMinIndex);
  const largerIdx = Math.max(midMaxIndex, midMinIndex);

  bothSides = smallerIdx + 1 + (nums.length - largerIdx); // no double counting
  return Math.min(leftCounter, rightCounter, bothSides);
};

console.log(minDeletionsBoundary([2, 10, 7, 5, 4, 1, 8, 6]));
