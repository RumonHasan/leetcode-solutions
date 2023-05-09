const countHillValley = (nums) => {
  let hillCounter = 0;
  let valleyCounter = 0;
  // getting rid of consequtive vals
  let endIndex = 0;
  let stack = [nums[endIndex]];
  endIndex = 1;
  while (endIndex < nums.length) {
    if (nums[endIndex] === stack[stack.length - 1]) {
      stack.pop();
      stack.push(nums[endIndex]);
    } else {
      stack.push(nums[endIndex]);
    }
    endIndex++;
  }
  for (let index = 1; index < stack.length - 1; index++) {
    if (stack[index] > stack[index - 1] && stack[index] > stack[index + 1]) {
      hillCounter++;
    }
    if (stack[index] < stack[index - 1] && stack[index] < stack[index + 1]) {
      valleyCounter++;
    }
  }

  return hillCounter + valleyCounter;
};

//console.log(countHillValley([2, 4, 1, 1, 1, 6, 5]));
