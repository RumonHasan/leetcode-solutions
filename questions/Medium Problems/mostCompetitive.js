const mostCompetitive = (nums, k) => {
  const intuitiveApproach = () => {
    let stack = [nums[0]];
    let numSize = nums.length;
    for (let index = 1; index < nums.length; index++) {
      while (
        nums[index] < stack[stack.length - 1] &&
        stack.length + numSize - index > k &&
        stack.length
      ) {
        stack.pop();
      }
      stack.push(nums[index]);
    }
    if (stack.length > k) {
      const diffLen = stack.length - k;
      for (let i = 0; i < diffLen; i++) {
        stack.pop();
      }
    }

    return stack;
  };
};

console.log(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4));
