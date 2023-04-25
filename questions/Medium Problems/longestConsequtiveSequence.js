const longestConsequtive = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.every((num) => num === nums[0])) return 1;
  let filteredNums = new Array(...new Set([...nums])).sort((a, b) => a - b);
  let maxLength = 0;
  let localCounter = 0;
  let index = 1;
  let val = filteredNums[0];

  while (index < filteredNums.length) {
    if (
      index === filteredNums.length - 1 &&
      filteredNums[index] - 1 === filteredNums[index - 1]
    ) {
      localCounter += 2;
      maxLength = Math.max(maxLength, localCounter);
    }
    if (filteredNums[index] - 1 === filteredNums[index - 1]) {
      localCounter++;
      val = filteredNums[index];
    }
    if (filteredNums[index] - 1 > filteredNums[index - 1]) {
      localCounter++;
      val = filteredNums[index];
      maxLength = Math.max(maxLength, localCounter);
      localCounter = 0;
    }
    index++;
  }
  return maxLength;
};

//console.log(longestConsequtive([0, 3, 7, 2, 5, 8, 9, 4, 6, 0, 1]));
